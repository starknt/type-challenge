type RemoveIndexSignature<T extends Record<string, unknown>> = {
  [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K]
};
