import { ServerRoute } from "@server/models";
import { RouteOptions } from "fastify";

export default class TransferRoute implements ServerRoute {
  route: RouteOptions = {
    method: "POST",
    url: "/transfer",
    handler: function (req, reply): unknown {
      return reply.status(201).send({message: 'success'})
    }
  }

  constructor() {}
}

// schema: {
//   body: {
//     type: 'object',
//     properties: {
//       value: { type: 'number' },
//       payer: { type: 'number' },
//       payee: { type: 'number' }
//     },
//     required: ['value', 'payer', 'payee']
//   },
//   response: {
//     200: {
//       type: 'object',
//       properties: {
//         message: { type: 'string' }
//       }
//     }
//   }
// },