import { Expect, Equal } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Pop<[1, 2, 3]>, [1, 2]>>,
  Expect<Equal<Pop<["a", "b", "c"]>, ["a", "b"]>>,
  Expect<Equal<Pop<[]>, never>>
];
