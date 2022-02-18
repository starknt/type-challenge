type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends ""
  ? S
  : From extends ""
  ? S
  : S extends `${infer LS}${From}${infer RS}`
  ? `${LS}${To}${RS}`
  : S;
