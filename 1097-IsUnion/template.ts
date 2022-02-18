/**
 * 1. 利用 extends 的分布式条件判断
 * 2. 先把联合类型转成数组类型再判断
 */

// 解法 2
// type IsUnion<T> = UnionToTuple<T> extends any[]
//   ? UnionToTuple<T>["length"] extends 1
//     ? false
//     : true
//   : false;

// 解法 1
type IsUnion<T, U = T> = T extends U
  ? Equal<T, U> extends true
    ? false
    : true
  : false;
