// 最简单的解法
// type TupleToUnion<T extends unknown[]> = T[number];
// infer
// type TupleToUnion<T> = T extends (infer U)[] ? U : never;
// 递归
type TupleToUnion<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? First | TupleToUnion<Rest>
  : never;
