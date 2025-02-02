import Fastify, { FastifyInstance, RouteOptions } from 'fastify';
import TransferRoute from './routes/transfer-route';

const app = Fastify({ logger: true })

abstract class ServerRouteManager {
  register(router: Router) {
    if (router.route) {
      app.route(router.route)
    }
  }
}

abstract class Router {
  public route?: RouteOptions | null = null
}

class Server extends ServerRouteManager {
  private port = 3000
  private routes = []

  constructor(port?: number) {
    super();
    this.port = port || this.port
  }

  listen() {
    app.listen({
      port: this.port
    }).then(server => console.log(`[+] Server is listening at: ${this.port}`))
  }
}

export {
  TransferRoute,
  Server,
  Router
}