import {Server, TransferRoute} from "@server/index.ts";
import UserRepository from "./repositories/user-repository";
import Cache from "./usecases/cache-usecase";

const server = new Server()

server.listen()

const cache = new Cache()
const user_repository = new UserRepository(cache)
const transfer_route = new TransferRoute(user_repository)

server.register(transfer_route)