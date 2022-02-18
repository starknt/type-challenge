/**
 * 这题没什么难度, 主要是 infer 的运用
 */
type AppendArgument<F extends Function, T> = F extends (
  ...args: infer U
) => infer R
  ? (...args: [...U, T]) => R
  : never;