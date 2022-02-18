/**
 * 1. 这题难点在于怎么编写一个正确的 Equal 类型
 */
// @referer https://stackoverflow.com/questions/68961864/how-does-the-equals-work-in-typescript/68963796#68963796
type Equal<A, B> = (<T>() => T extends A ? true : false) extends <
  T1
>() => T1 extends B ? true : false
  ? true
  : false;

type Includes<T extends unknown[], U> = T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;
