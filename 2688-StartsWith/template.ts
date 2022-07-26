type StartsWith<S extends string, C extends string, R extends boolean = false, L extends any[] = []> =
  C extends `${infer FC}${infer RC}`
  ? S extends `${infer FS}${infer RS}`
  ? FC extends FS
  ? StartsWith<RS, RC, true, [FC, ...L]>
  : false
  : L['length'] extends 0 ? R : false
  : L['length'] extends 0 ? true : R