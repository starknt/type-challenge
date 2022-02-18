/**
 * 笔记:
 * 1. 如果超出数组索引的话, 会得到一个 undefined
 * 2. 使用 T[number] 语法时, 如果 T 是一个空数组的话, 会得到一个 never , 否则得到一个 (union)联合类型
 */

// 解法 1
type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// 解法 2
// type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never

// 解法 3
// type First<T extends any[]> = T extends [] ? never : T[0]

// 解法 4
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
