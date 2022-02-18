import { Equal, Expect } from "@type-challenges/utils";

declare function f1(arg: { a: number; b: string }): void;

type cases = [
  Expect<Equal<MyParameters<() => string>, []>>,
  Expect<Equal<MyParameters<(s: string) => string>, [s: string]>>,
  Expect<Equal<MyParameters<any>, unknown[]>>,
  Expect<Equal<MyParameters<never>, never>>,
  Expect<
    Equal<
      MyParameters<typeof f1>,
      [
        arg: {
          a: number;
          b: string;
        }
      ]
    >
  >,
];

// @ts-expect-error
type error1 = MyParameters<string>
// @ts-expect-error
type error2 = MyParameters<Function>
