import { FastifyInstance } from 'fastify';
import { ServerRoute } from '../models';
import UserRepository from 'src/repositories/user-repository';

export default class UserCreateRoute implements ServerRoute {
  private user_repository: UserRepository

  constructor(user_repository: UserRepository) {
    this.user_repository = user_repository
  }

  register(app: FastifyInstance): void {
    app.post('/api/user/create', (req, reply) => {})
  }
}