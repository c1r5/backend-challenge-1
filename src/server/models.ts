import { FastifyInstance, FastifyRequest, FastifyReply, RouteShorthandOptions, DoneFuncWithErrOrRes } from 'fastify';

export interface ServerRoute {
  register(app: FastifyInstance): void
  handler(req: FastifyRequest, reply: FastifyReply): void,
  pre_handler(req: FastifyRequest, reply: FastifyReply, done: DoneFuncWithErrOrRes): void
}