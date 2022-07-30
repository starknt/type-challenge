type FlipArguments<T extends Function> =
  T extends (arg0: infer F, ...args: infer R) => infer Return ? R['length'] extends 0 ? T
  : (...args: [...ReverseArray<[F, ...R]>]) => Return
  : T

type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>
// (arg0: boolean, arg1: number, arg2: string) => void