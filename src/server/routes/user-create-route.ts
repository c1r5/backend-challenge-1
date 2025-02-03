import { DoneFuncWithErrOrRes, FastifyInstance, FastifyReply, FastifyRequest, RouteShorthandOptions } from 'fastify';
import { ServerRoute } from '../models';
import UserRepository from 'src/repositories/user-repository';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export default class UserCreateRoute implements ServerRoute {
  private user_repository: UserRepository
  private options: RouteShorthandOptions = {
    preHandler: this.pre_handler,
    schema: {
      body: {
        type: 'object',
        required: ['name', 'email', 'document', 'password'],
        properties: {
          name: { type: 'string'},
          email: { type: 'string'},
          document: { type: 'string'},
          password: { type: 'string'}
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
    return reply.status(StatusCodes.CREATED).send({message: ReasonPhrases.CREATED})
  }

  pre_handler(req: FastifyRequest, reply: FastifyReply, done: DoneFuncWithErrOrRes) {
    console.log(req.body)
    done()
  }
}