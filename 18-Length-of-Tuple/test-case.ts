import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<LengthT<["tesla", "model 3", "model X", "model Y"]>, 4>>,
  Expect<
    Equal<
      LengthT<
        ["FALCON 9", "FALCON HEAVY", "DRAGON", "STARSHIP", "HUMAN SPACEFLIGHT"]
      >,
      5
    >
  >,
  Expect<Equal<LengthT<[]>, 0>>,
  Expect<Equal<LengthT<[() => 1]>, 1>>
];
