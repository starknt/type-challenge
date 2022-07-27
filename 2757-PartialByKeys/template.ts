// @ts-ignore
type PartialByKeys<O extends Record<string, any>, U extends any = keyof O, UU = U extends keyof O ? U : never, PO = Partial<Pick<O, UU>>> =
  Expand<PO & {
    [K in keyof O as K extends U ? never : K]: O[K]
  }>

