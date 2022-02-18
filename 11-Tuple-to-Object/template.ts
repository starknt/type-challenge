/**
 * 1. 怎样返回对象
 * 2. 怎样遍历数组 
 *  2.1 P in keyof T 这样返回的是数组
 *  2.2 P in T[number] 这样返回的是对象
 */

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;      // P 这里拿到的数组的值
};

// type TupleToObject<T extends readonly any[]> = {
//   [P in keyof T]: T[P];  // P 这里拿到的是数组索引
// };