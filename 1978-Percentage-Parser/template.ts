type PercentageParser<T extends string> =
    T extends `${infer F}${infer N}%` ? F extends `${number}` ? ["", `${F}${N}`, "%"] : [F, N, "%"]
    : T extends `${infer F}${infer N}` ? F extends `${number}` ? ["", `${F}${N}`, ""]
    : F extends `%` ? ["", "", F] : [F, N, ""]
    : T extends `%` ? ["", "", "%"]
    : [T, T, T]
