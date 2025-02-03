import { RouteOptions, RawServerDefault, RouteGenericInterface, FastifySchema, FastifyTypeProviderDefault, FastifyBaseLogger, FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';
import { ServerRoute } from '../models';
import { ResolveFastifyRequestType } from 'fastify/types/type-provider';
import UserRepository from 'src/repositories/user-repository';


export default class UserCreateRoute implements ServerRoute {
  route: RouteOptions = {
    method: 'POST',
    url: '/api/user/create',
    handler: function (this: FastifyInstance<RawServerDefault, IncomingMessage, ServerResponse<IncomingMessage>, FastifyBaseLogger, FastifyTypeProviderDefault>, request: FastifyRequest<RouteGenericInterface, RawServerDefault, IncomingMessage, FastifySchema, FastifyTypeProviderDefault, unknown, FastifyBaseLogger, ResolveFastifyRequestType<FastifyTypeProviderDefault, FastifySchema, RouteGenericInterface>>, reply: FastifyReply<RouteGenericInterface, RawServerDefault, IncomingMessage, ServerResponse<IncomingMessage>, unknown, FastifySchema, FastifyTypeProviderDefault, unknown>): unknown {
      throw new Error('Function not implemented.');
    }
  };

  constructor(user_repository: UserRepository) {
    
  }
}