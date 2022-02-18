/**
 * 把 bigint 转换成字符串
 */

type Absolute<N extends number | bigint | string> = `${N}` extends `-${infer V}`
  ? V
  : `${N}`;
