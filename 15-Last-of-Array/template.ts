type Last<T extends unknown[]> = T extends [...infer Rest, infer Last]
  ? Last
  : never;
