import { ServerRoute } from "@server/models";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import UserRepository from "src/repositories/user-repository";

export default class TransferRoute implements ServerRoute {
  private user_repository: UserRepository
  constructor(user_repository: UserRepository) { 
    this.user_repository = user_repository
  }
  handler(req: FastifyRequest, reply: FastifyReply): void {
    throw new Error("Method not implemented.");
  }

  register(app: FastifyInstance): void {
    app.post('/api/transfer', this.handler)
  }
}