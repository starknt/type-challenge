type FlattenDepth<T extends any[], Times extends number = 1, D extends any[] = []> =
  D['length'] extends Times ? T
  : T extends [infer F, ...infer R] ? F extends any[] ? [...FlattenDepth<F, Times, [...D, 0]>, ...FlattenDepth<R, Times, D>]
  : [F, ...FlattenDepth<R, Times, D>]
  : T

type aab = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type bb = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1