import { Equal, Expect } from "@type-challenges/utils";

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<Promise<string | number>>>;

type cases = [
  Expect<Equal<MyAwaited<null | undefined>, Awaited<undefined | null>>>,
  Expect<Equal<MyAwaited<string>, Awaited<string>>>,
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>
];
