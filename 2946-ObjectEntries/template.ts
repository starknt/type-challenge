type ObjectEntries<T extends Record<string, any>, U = keyof T> = U extends keyof T ? [U, T[U] extends infer R | undefined ? R : T[U]] : never


interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];