import { DoneFuncWithErrOrRes, FastifyInstance, FastifyReply, FastifyRequest, RouteShorthandOptions } from 'fastify';
import { ServerRoute } from '../models';
import UserRepository from 'src/repositories/user-repository';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { User } from 'src/dtos/user-dto';

export default class UserCreateRoute implements ServerRoute {
  private user_repository: UserRepository
  private options: RouteShorthandOptions = {
    preHandler: this.pre_handler,
    schema: {
      body: {
        type: 'object',
        required: ['name', 'email', 'document', 'password'],
        properties: {
          name: { type: 'string' },
          email: { type: 'string' },
          document: { type: 'string' },
          password: { type: 'string' }
        }
      }
    }
  }
  constructor(user_repository: UserRepository) {
    this.user_repository = user_repository
  }

  register(app: FastifyInstance): void {
    app.post('/api/user/create', this.options, this.handler)
  }

  handler(req: FastifyRequest, reply: FastifyReply) {
    let user = User.from(req.body)

    if (!user) {
      return reply.status(StatusCodes.BAD_REQUEST).send({ message: ReasonPhrases.INTERNAL_SERVER_ERROR })
    }

    let user_exists = this.user_repository.find(user)

    if (user_exists) {
      return reply.status(StatusCodes.BAD_REQUEST).send({ message: 'user_already_exists' })
    }
    
    let create_user = this.user_repository.create(user)

    if (!create_user) return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: ReasonPhrases.INTERNAL_SERVER_ERROR })

    return reply.status(StatusCodes.CREATED).send({ message: ReasonPhrases.CREATED })
  }

  pre_handler(req: FastifyRequest, reply: FastifyReply, done: DoneFuncWithErrOrRes) {
    done()
  }
}