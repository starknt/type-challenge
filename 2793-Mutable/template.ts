type Mutable<T extends Record<string | number | symbol, any>> = {
  -readonly [K in keyof T]: T[K]
}