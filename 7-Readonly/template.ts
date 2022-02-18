/**
 * 思路
 * 1. 先提取出公共的键(Key), 变为只读属性, 作为第一个类型
 * 2. 从 T 去除公共的键(Key), 作为第二个类型
 * 3. 合并两个类型
 */

type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [P in K]: T[P];
} & {
    [P in Exclude<keyof T, K>]: T[P]
};




