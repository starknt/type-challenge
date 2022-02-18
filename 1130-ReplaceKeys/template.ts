type ReplaceKeys<T, U, V> = {
  [P in keyof T]: P extends U ? (P extends keyof V ? V[P] : never) : T[P];
};