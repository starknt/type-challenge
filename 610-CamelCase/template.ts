type CamelCase<S extends string> = S extends `${infer LS}-${infer RS}`
  ? `-${RS}` extends `-${Capitalize<RS>}` // 对 foo-Bar 这种形式不进行转换
    ? `${LS}-${CamelCase<RS>}`
    : `${LS}${CamelCase<Capitalize<RS>>}`
  : S;
