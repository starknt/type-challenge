type TrimRight<T> = T extends `${infer P}${" " | "\t" | "\n"}`
  ? TrimRight<P>
  : T;
