import { Equal, Expect } from "@type-challenges/utils";

type cases = [
    Expect<Equal<MyReadonly1<TodoReadOnly>, Readonly<TodoReadOnly>>>,
];
