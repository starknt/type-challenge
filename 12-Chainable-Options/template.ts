/**
 * 1. 必须使用 K extends string, 而不能使用 K = string, 否则无法使用 [P in K]
 * 2. 难点: 怎么javascrpt的值到tpescript类型的值
 *  interface Todo {
 *      name: string;
 *      description: string;
 *      completed: boolean;
 * }
 *
 * Exclude<keyof Todo, 'title'> // 'description' | 'completed'
 *
 * K extends string 可以让 K 的类型变成字符串字面量
 * type R<K extends string> = K
 * type RR = R<'name'>      // 'name' 本质上应该是一个 union(联合)类型
 */

type Chainable<T extends Record<string, unknown> = {}> = {
  option<K extends string, V = any>(
    key: Exclude<K, keyof T>,
    value: V
  ): Chainable<T & { [P in K]: typeof value }>;
  get(): T;
};
