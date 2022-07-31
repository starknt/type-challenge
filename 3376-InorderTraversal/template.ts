interface TreeNode {
  val: any
  left: TreeNode | null
  right: TreeNode | null
}

interface Tree {
  val: any
  left: TreeNode
  right: TreeNode
}

// @ts-ignore
type InorderTraversal<T, L = T['left'], R = T['right']> =
  // @ts-ignore
  T extends null ? [] : [...L extends null ? [] : InorderTraversal<L>, T['val'], ...R extends null ? [] : InorderTraversal<R>]
