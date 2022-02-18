type Merge<
  T1 extends Record<string, unknown>,
  T2 extends Record<string, unknown>
> = {
  [P in keyof T1 | keyof T2]: P extends keyof T1
    ? P extends keyof T2 // 如果 P 在 T1 中也在 T2 中, 就以 T2 为准
      ? T2[P]
      : T1[P]
    : P extends keyof T2
    ? T2[P]
    : never;
};
