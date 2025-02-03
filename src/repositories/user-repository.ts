import { User } from "src/dtos/user-dto";
import { json_file_update } from "./user-utilities";
import Cache from "src/usecases/cache-usecase";

type UsersDatabaseMock = User[]

const user_database_mock_filepath = "../../data/users.json";

export default class UserRepository {
  private users?: UsersDatabaseMock
  private cache: Cache
  constructor(cache: Cache) {
    this.cache = cache
  }

  find(user: User): User | undefined {
    let user_id = user.id;
    let cached_user_by_id = `userid_${user_id}`

    if (this.cache.has(cached_user_by_id)) {
      console.log(`[+] searching cached user: ${cached_user_by_id}`)
      return this.cache.get(cached_user_by_id)
    }

    console.log(`[+] searching in database: ${cached_user_by_id}`)

    let db_user = this.users?.find(u => u.id == user_id)

    if (!db_user) return

    this.cache.set(cached_user_by_id, db_user)

    return db_user
  }

  create(user: User): User | undefined {
    if (!this.users) return;

    let old_len = this.users?.length

    user.id = old_len + 1
    user.balance = 0

    let new_len = this.users?.push(user)

    json_file_update(user_database_mock_filepath, this.users)

    if (new_len <= old_len) return

    return user
  }

  delete(user: User): User | undefined {
    return
  }

  update(user: User): User | undefined {
    return
  }

  balance(): number | undefined {
    return
  }

}