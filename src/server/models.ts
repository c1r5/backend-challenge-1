import { FastifyInstance, FastifyRequest, FastifyReply, RouteShorthandOptions, DoneFuncWithErrOrRes } from 'fastify';

export interface ServerRoute {
  register(app: FastifyInstance): void
  handler(req: FastifyRequest, reply: FastifyReply): unknown,
  pre_handler(req: FastifyRequest, reply: FastifyReply, done: DoneFuncWithErrOrRes): unknown
}