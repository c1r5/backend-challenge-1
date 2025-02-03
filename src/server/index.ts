import Fastify, { FastifyInstance, RouteOptions } from 'fastify';
import TransferRoute from './routes/transfer-route';
import { ServerRoute } from './models';

const app = Fastify({ logger: true })


class Server {
  private port = 3000

  constructor(port?: number) {
    this.port = port || this.port
  }

  app(): FastifyInstance {
    return app
  }

  listen() {
    app.listen({
      port: this.port
    }).then(server => console.log(`[+] Server is listening at: ${this.port}`))
  }
}

export {
  TransferRoute,
  Server
}