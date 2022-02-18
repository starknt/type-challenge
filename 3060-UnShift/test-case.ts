import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<UnShift<[1, 2, 3], 0>, [0, 1, 2, 3]>>,
  Expect<Equal<UnShift<[1, 2, 3], "a">, ["a", 1, 2, 3]>>,
  Expect<Equal<UnShift<[1, 2, 3], boolean>, [boolean, 1, 2, 3]>>,
  Expect<Equal<UnShift<[1, 2, 3], {}>, [{}, 1, 2, 3]>>,
  Expect<Equal<UnShift<[1, 2, 3], () => 0>, [() => 0, 1, 2, 3]>>
];
