type PartialByKeys<O extends Record<string, any>, U extends any = keyof O, PO = Partial<PickByType<O, O[U]>>> =
  Expand<PO & {
    [K in keyof O as K extends U ? never : K]: O[K]
  }>

