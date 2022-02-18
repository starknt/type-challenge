type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends ""
  ? S
  : From extends ""
  ? S
  : S extends `${infer LS}${From}${infer RS}`
  ? `${LS}${To}${ReplaceAll<RS, From, To>}`
  : S;

type replaced = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'
