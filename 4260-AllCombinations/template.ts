// 将字符串中的每个值使用 | 组合成联合类型
type String2Union<S extends string> =
  S extends `${infer C}${infer R}`
  ? C | String2Union<R>
  : never;

// 利用 Exclude 去除重复键
// type AllCombinations<
//   S extends string,
//   U extends string = String2Union<S>,
//   > = [U] extends [never]
//   ? ''
//   : '' | { [K in U]: `${K}${AllCombinations<never, Exclude<U, K>>}` }[U];

type Spread<C extends string, S extends string> =
  `${C}${S}` | (S extends `${infer F}${infer R}`
    ? `${F}${Spread<C, R>}`
    : C)

type AllCombinations<S extends string> =
  S extends `${infer F}${infer R}`
  ? AllCombinations<R> | Spread<F, AllCombinations<R>>
  : ""

type AllCombinations_Test = AllCombinations<'A'>
type AllCombinations_Test1 = AllCombinations<''>
type AllCombinations_ABC = AllCombinations<'ABC'>;
type AllCombinations_Test2 = UnionToTuple<AllCombinations<'ABCD'>>
