/**
 * Typescript extends关键字的分布式条件类型,
 * 当 extends 左右两侧的类型都无法确定的时候, extends就会把传入的类型展开判断,
 * 此时 extends 的结果为展开判断后非 never 组成的联合类型
 *  例子:
 *  'a' | 'b' extends 'c' ? never : 'a' -----> 'a' extends 'c' ? never : 'a' | 'b' extends 'c' ? never : 'a'
 *  结果:
 *  'a'
 */

type MyExclude<T, U> = T extends U ? never : T;
