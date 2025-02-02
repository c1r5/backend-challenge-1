import {Server, TransferRoute} from "@server/index.ts";

const server = new Server()

server.listen()


const transferRoute = new TransferRoute()

server.register(transferRoute)