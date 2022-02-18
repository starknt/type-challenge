/**
 * T['type'] 和 T extends { type: infer U } 的区别
 */
type LookUp<T, K extends string> = T extends { type: infer U }
  ? U extends K
    ? T
    : never
  : never;
