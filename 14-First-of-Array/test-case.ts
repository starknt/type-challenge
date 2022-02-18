import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<First<["a", "b", "c"]>, "a">>,
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, 123]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];
