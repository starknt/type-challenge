/**
 * @template Length 数组长度
 * @template Element 填充的数组元素
 * @template Array 可选的
 */
type CreateArray<Length extends number, Element, Array extends any[] = []> = Array['length'] extends Length ? Array : CreateArray<Length, Element, [...Array, Element]>

type AddNumber<N1 extends number, N2 extends number> = [...CreateArray<N1, 1>, ...CreateArray<N2, 1>]['length']

// 解法 1
// type RepeatString<S extends string, Count extends number, Counter extends number = 1> =
//     [...CreateArray<Counter, 1>]['length'] extends Count
//     ? S : `${S}${RepeatString<S, Count, AddNumber<Counter, 1> extends number
//         ? AddNumber<Counter, 1> : 1>}`

// 解法 2
type RepeatString<S extends string, Count extends number, Array extends any[] = []> =
    Array['length'] extends Count
    ? S : `${S}${RepeatString<S, Count, [S, ...Array]>}`

/**
 * @template Array 需要转换成字符串的字符串数组
 */
type ArrayToString<Array extends any[]> =
    Array['length'] extends 0 ? ""
    : Array extends [infer F, ...infer R] ? F extends string ? `${F}${ArrayToString<R>}`
    : never
    : never

type Expand<T extends Record<string, any>> = T extends object ? T extends infer O ? { [K in keyof O]: Expand<O[K]> } : never : T
