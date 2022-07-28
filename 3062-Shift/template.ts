type Shift<T extends any[]> = T extends [infer F, ...infer R] ? [...R] : []

type Result = Shift<[3, 2, 1]> // [2, 1]