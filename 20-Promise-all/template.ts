/**
 * 难点:
 *  怎样参数中的去除 readonly ?
 *  1. 采用是类似于 模式匹配 的方式去除 readonly
 *  2. 使用 -readonly 
 * 
 */
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
  [P in keyof T]: T[P] extends Promise<infer U> ? U : T[P];
}>;

// -readonly 确实可以去除 readonly 但是也会造成一些其他的影响
// declare function PromiseAll<T>(values: T): Promise<{
//   -readonly [P in keyof T]: T[P] extends Promise<infer U> ? U : T[P];
// }>;
