type TrimLeft<T extends string> = T extends `${' ' | '\t' | '\n'}${infer P}` ? TrimLeft<P> : T