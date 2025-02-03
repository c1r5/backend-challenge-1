import { FastifyInstance } from "fastify";

export interface ServerRoute {
  register(app: FastifyInstance): void
}