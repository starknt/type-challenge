type KebabCase<
  S extends string,
  F extends boolean = false
> = S extends `${infer LS}${infer RS}` ? LS : never;

// type r = KebabCase<"FooBarBaz">; // expected foo-bar-baz
