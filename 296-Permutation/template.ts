/**
 * 1. extends 分布式条件判断
 * 2. [type] 不会转换类型, 利用了元组的特性
 * @reference https://github.com/type-challenges/type-challenges/issues/614
 */

/**
 * @description 生成联合类型的全排列
 * @template U 联合类型
 */
type Permutation<U, K = U> =
  // 递归的结束条件, Exclude<"A", "A"> ---> never,
  // 但是值得注意的是 never extends never ? true : false ---> false,
  // 我们要使用元组的特性避免这个问题
  [U] extends [never]
    ? []
    : /**
     * 把 K 这个联合类型拆开 "A" | "B" extends “A” | "B" ----> "A" extends "A" "B" extends "B"
     * 变成 "A" extends "A" ? ["A", ...Permutation<Exclude<"A" | "B", "A">>]
     * 最后 "B" extends "B" ? ["B", ...Permutation<Exclude<"A" | "B", "B">>]
     */
    K extends K
    ? [K, ...Permutation<Exclude<U, K>>] //
    : never; // 这里应该永远都不会执行到

// ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
type perm = Permutation<"A" | "B" | "C">;

/**
 * 将联合类型转为对应的交叉函数类型
 * @template U 联合类型
 */
type UnionToInterFunction<U> = (
  U extends any ? (k: () => U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

type ru = UnionToInterFunction<"a" | "b"> extends () => infer A ? A : never;

/**
 * 获取联合类型中的最后一个类型
 * @template U 联合类型
 */
type GetUnionLast<U> = UnionToInterFunction<U> extends { (): infer A }
  ? A
  : never;

/**
 * 在元组类型中前置插入一个新的类型（元素）；
 * @template Tuple 元组类型
 * @template E 新的类型
 */
type Prepend<Tuple extends any[], E> = [E, ...Tuple];

/**
 * 联合类型转元组类型；
 * @template Union 联合类型
 * @template T 初始元组类型
 * @template Last 传入联合类型中的最后一个类型（元素），自动生成，内部使用
 */
type UnionToTuple<Union, T extends any[] = [], Last = GetUnionLast<Union>> = {
  0: T;
  1: UnionToTuple<Exclude<Union, Last>, Prepend<T, Last>>;
}[[Union] extends [never] ? 0 : 1];