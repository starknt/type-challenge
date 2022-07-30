type BEM<B extends string, E extends string[], M extends string[], Mode = 'b'> =
  E extends [infer EF extends string, ...infer ER extends string[]] ? BEM<`${B}__${EF}`, ER, M>
  : M extends [infer MF extends string, ...infer MR extends string[]] ? `${B}--${MF}` | BEM<B, E, MR, 'm'>
  : Mode extends 'b' ? B : never


type BEM_ = BEM<'btn', ['price'], []> // print btn__price
type BEM__ = BEM<'btn', ['price'], ['warning', 'success']> // print btn__price--warning | btn__price--success