type Flip<T extends Record<any, any>> =
  {
    [K in keyof T as `${T[K]}`]: K
  }

type Flip_Test1 = Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
type Flip_Test2 = Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
type Flip_Test3 = Flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}

