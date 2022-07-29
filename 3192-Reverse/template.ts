/**
 * @template Array 需要反转的字符串或者数组
 */
type Reverse<Array extends string | any[]> = Array extends string ? ArrayToString<StringToArray<Array>> : Array extends [infer F, ...infer R] ? [...Reverse<R>, F] : []