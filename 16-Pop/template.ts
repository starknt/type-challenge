type Pop<T extends unknown[]> = T extends [...infer Rest, infer Last]
  ? Rest
  : never;
