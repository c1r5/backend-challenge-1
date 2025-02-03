import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  document: z.string(),
  email: z.string(),
  password: z.string()
})

export type UserSchema = z.infer<typeof UserSchema>