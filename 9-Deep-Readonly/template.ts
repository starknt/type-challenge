/**
 * 1.
 */
// 对象
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Function ? T[P] : DeepReadonly<T[P]>;
};
