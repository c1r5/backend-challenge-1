import { UserSchema } from "src/schemas/user-schema";

export default interface User extends UserSchema{
  id: number,
  balance?: number
}