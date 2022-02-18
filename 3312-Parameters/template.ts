type MyParameters<T extends (...args: any) => unknown> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
