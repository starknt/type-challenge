type Trim<T extends string, S = TrimRight<TrimLeft<T>>> = S;
