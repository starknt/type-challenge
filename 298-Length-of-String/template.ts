/**
 * @description Input: 一个字符串 Output: 字符串长度
 * @template S 一个字符串
 */
// 我的解法
type LengthOfString<S extends string, L extends any[] = []> = S extends ""
  ? L["length"]
  : S extends `${infer First}${infer Rest}`
  ? LengthOfString<Rest, [First, ...L]>
  : never;

/**
 * 解法的区别, 本质上都差别不大, 
 * 但是我没有考虑到 "" extends `${infer First}${infer Rest}` ? true : false --> false
 * */  

// 其他解法
// type LengthOfString<
//   S extends string,
//   L extends any[] = []
// > = S extends `${infer First}${infer Rest}`
//   ? LengthOfString<Rest, [First, ...L]>
//   : L["length"];
