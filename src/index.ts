import { Server, TransferRoute } from "@server/index.ts";
import UserRepository from "./repositories/user-repository";
import Cache from "./usecases/cache-usecase";
import UserCreateRoute from "@server/routes/user-create-route";

const server = new Server()
const app = server.app()

server.listen()

const cache = new Cache()
const user_repository = new UserRepository(cache)

const transfer_route = new TransferRoute(user_repository)
const user_create_route = new UserCreateRoute(user_repository)

transfer_route.register(app)
user_create_route.register(app)