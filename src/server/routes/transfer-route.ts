import { ServerRoute } from "@server/models";
import { DoneFuncWithErrOrRes, FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import UserRepository from "src/repositories/user-repository";

export default class TransferRoute implements ServerRoute {
  private user_repository: UserRepository
  constructor(user_repository: UserRepository) { 
    this.user_repository = user_repository
  }
  pre_handler(req: FastifyRequest, reply: FastifyReply, done: DoneFuncWithErrOrRes): void {
    done()
  }
  handler(req: FastifyRequest, reply: FastifyReply): unknown {
    return reply.status(200).send('')
  }

  register(app: FastifyInstance): void {
    app.post('/api/transfer', this.handler)
  }
}