interface TreeNode {
  val: any
  left: TreeNode | null
  right: TreeNode | null
}

type InorderTraversal<T extends TreeNode | null> =
  [T] extends [TreeNode] ? [...[T['left']] extends [TreeNode] ? InorderTraversal<T['left']> : [], T['val'], ...[T['right']] extends [TreeNode] ? InorderTraversal<T['right']> : []] : []
