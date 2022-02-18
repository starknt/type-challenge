import { Expect, Equal } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Last<[1, 2, 3]>, 3>>,
  Expect<Equal<Last<["a", "b", "c"]>, "c">>,
  Expect<Equal<Last<[]>, never>>
];
