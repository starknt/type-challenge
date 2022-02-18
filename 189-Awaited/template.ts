type MyAwaited<T> = T extends Promise<infer U>
  ? U extends Promise<infer _>
    ? MyAwaited<U>
    : U
  : T;

