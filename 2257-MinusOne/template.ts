/**
 * 这一题普通做法会导致类型实例化过深, 使得case 1000+的无法通过
 * @reference https://github.com/type-challenges/type-challenges/issues/12962
 * 这个答案的解题思路是, 把 10+ 100+ 1000+ 变成 2、3、4位, 手动填充数组数量, 防止出现递归次数过多出现问题
 */

// Lookup table to seed the counting array
// Skips to length of 10, 100, 1000 instead of counting
// Allows going up to 1998 instead of 999!
// With some work, this technique can be pushed further for higher numbers
interface InitialLengths {
    '2': [0, 0, 0, 0, 0,
        0, 0, 0, 0, 0],
    '3': [...InitialLengths[2], ...InitialLengths[2], ...InitialLengths[2], ...InitialLengths[2], ...InitialLengths[2],
        ...InitialLengths[2], ...InitialLengths[2], ...InitialLengths[2], ...InitialLengths[2], ...InitialLengths[2]],
    '4': [...InitialLengths[3], ...InitialLengths[3], ...InitialLengths[3], ...InitialLengths[3], ...InitialLengths[3],
        ...InitialLengths[3], ...InitialLengths[3], ...InitialLengths[3], ...InitialLengths[3], ...InitialLengths[3]],
}

type StringToArray<T extends string, Arr extends any[] = []> = T extends `${infer C}${infer S}` ? StringToArray<S, [C, ...Arr]> : Arr
type NumberLength<T extends number> = StringToArray<`${T}`>['length']
type PopArrayLength<T extends any[]> = T extends [infer _, ...infer L] ? L['length'] : 0

type MinusOne<T extends number, U extends any[] = []> =
    T extends U['length'] ? PopArrayLength<U>
    // 补充个位使得 T extends U['length'] 成立
    : `${NumberLength<T>}` extends `${NumberLength<U['length']>}` ? MinusOne<T, [T, ...U]>
    : `${NumberLength<T>}` extends infer L extends keyof InitialLengths ? MinusOne<T, [...InitialLengths[L], ...U]>
    : never

type aa = MinusOne<10>