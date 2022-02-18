/**
 * 1. 结果是一个对象, 所以不能写成 {} & {} 的形式, 不然不能通过测试
 * 2. 
 */

type AppendToObject<
  T extends Record<string, unknown>,
  K extends string,
  V = any
> = {
  [P in K | keyof T]: P extends keyof T ? T[P] : V;
};
