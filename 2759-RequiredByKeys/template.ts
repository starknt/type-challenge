// @ts-ignore
type RequiredByKeys<O extends Record<string, any>, U = keyof O, UU = U extends keyof O ? U : never, RO = Required<Pick<O, UU>>> =
  Expand<RO & O>

interface User {
  name?: string
  age?: number
  address?: string
}

type UserRequiredName = RequiredByKeys<User, 'name' | 'age' | '123'> // { name: string; age?: number; address?: string }