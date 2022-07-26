type EndsWith<S extends string, C extends string> = StartsWith<Reverse<S>, Reverse<C>>

type Reverse<S extends string> = ArrayToString<StringToArray<S>>

type ArrayToString<Arr extends any[]> =
  Arr['length'] extends 0 ? ""
  : Arr extends [infer F, ...infer R] ? F extends string ? `${F}${ArrayToString<R>}`
  : never
  : never