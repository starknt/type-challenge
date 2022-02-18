// type Concat<T extends unknown[], U extends unknown[]> = T extends [...infer Rest1]
//   ? U extends [...infer Rest2]
//     ? [...Rest1, ...Rest2]
//     : never
//   : never;

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
