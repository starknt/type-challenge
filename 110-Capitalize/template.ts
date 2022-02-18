type MyCapitalize<
  T extends string,
  S = Trim<T>
> = S extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : "";
