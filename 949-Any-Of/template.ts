/**
 * 关键点:
 * 1. []、0、''等字面量均继承于 {}, 但是除了[]外, 不继承于 Record
 * 2. 
 */
type sda = [] extends Record<any, any> ? true : false
type IsFalsy<T> =
    T extends string ? StringFalsy<T>
    : T extends number ? NumberFalsy<T>
    : T extends Array<any> ? ArrayFalsy<T> extends false ? false : true
    : T extends Record<any, any> ? ObjectFalsy<T>
    : T

type NumberFalsy<T extends number> = T extends 0 ? false : true
type ObjectFalsy<T extends Record<any, any>> = keyof T extends never ? false : true
type StringFalsy<T extends string> = T extends '' ? false : true
type ArrayFalsy<T extends Array<any>> = T['length'] extends 0 ? false : true

type AnyOf<T extends Array<any>> =
    ArrayFalsy<T> extends false ? false
    : T extends [infer F, ...infer R] ? IsFalsy<F> extends true ? true
    : AnyOf<R>
    : never
