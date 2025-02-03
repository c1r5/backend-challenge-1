import { ServerRoute } from "@server/models";
import { FastifyInstance } from "fastify";
import UserRepository from "src/repositories/user-repository";

export default class TransferRoute implements ServerRoute {
  private user_repository: UserRepository
  constructor(user_repository: UserRepository) { 
    this.user_repository = user_repository
  }

  register(app: FastifyInstance): void {
    app.post('/api/transfer', (req, reply) => {
      
    })
  }
}