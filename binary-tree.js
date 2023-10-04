"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode() {

    if(!this.left || !this.right) return 1

    let leftDepth =0
    let rightDepth=0

    if( this.left){
      leftDepth=this.left.minDepthToIncompleteNode()

    }
    if(this.right){
      rightDepth=this.right.minDepthToIncompleteNode()
    }

    let totalDepth = Math.min(leftDepth,rightDepth)+1;

    return totalDepth

    // let count = 0;
    // let queue = [this];

    // while (queue.length){
    //   console.log("queue length",queue.length,"count",count)
    //   if (queue.length % 2 === 1) { count++; }
    //   const curr = queue.pop()

    //   if (curr.left && curr.right) {
    //     queue.shift(curr.left);
    //     queue.shift(curr.right);
    //   }
    // }
    // return count;

  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {

    if(!this.left && !this.right) return 1

    let leftDepth =0
    let rightDepth=0

    if( this.left){
      leftDepth=this.left.maxDepth()

    }
    if(this.right){
      rightDepth=this.right.maxDepth()
    }

    let totalDepth = Math.max(leftDepth,rightDepth)+1;

    return totalDepth
  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
  minDepth() {

  }

  /** nextLarger(lowerBound): return the smallest value from the invoking node
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {
    if (!this.root) return 0;
    return this.root.minDepthToIncompleteNode();
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    if (!this.root) return 0;
    return this.root.maxDepth();
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
