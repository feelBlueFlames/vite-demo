import { TreeNode } from '../type'

export const preOrder = <T>(root: TreeNode<T>) => {
  if (!root) return
  console.log(root.val)
  root.left && preOrder(root.left)
  root.right && preOrder(root.right)
}
