/**
 * 注意不要返回 never, 因为 never | "a" ---> never
 */

type DropChar<T extends string, C extends string> =
    T extends `${infer SC}${infer SS}` ? SC extends C ? DropChar<SS, C>
    : `${SC}${DropChar<SS, C>}`
    : ""