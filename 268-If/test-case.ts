import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<If<true, "a", "b">, "a">>,
  Expect<Equal<If<false, "a", "b">, "b">>
];

// @ts-expect-error
type error = If<null, "a", "b">;
