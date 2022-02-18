/**
 * 1. never | string --> string
 * 2. Exclude<'a', 'a' | 'b'> ---> never
 */

type Diff<
  O extends Record<string, unknown>,
  O1 extends Record<string, unknown>
> = {
  [P in
    | Exclude<keyof O1, keyof O>
    | Exclude<keyof O, keyof O1>]: P extends keyof O
    ? O[P]
    : P extends keyof O1
    ? O1[P]
    : never;
};