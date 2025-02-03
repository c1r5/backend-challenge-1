
export interface User {
  id: number,
  balance: number,
  name: string,
  document: string,
  email: string,
  password: string
}

export class User implements User {
  constructor() { }

  static from(value: any): User | undefined {
    if (!value) return

    return {
      id: 0,
      balance: 0,
      name: value.name,
      document: value.document,
      email: value.email,
      password: value.password
    }
  }
}
