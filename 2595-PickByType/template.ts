// type PickByType<O extends Record<any, any>, T> = {
//     [K in keyof O as O[K] extends T ? K : never]: O[K]
// }

type PickByType<O extends Record<any, any>, T> = Pick<O, {
    [K in keyof O]: O[K] extends T ? K : never
}[keyof O]>

type tt = PickByType<{ a: boolean }, boolean>