type MyOmit<T, K extends string | symbol | number> = {
  [P in Exclude<keyof T, K>]: T[P];
};
