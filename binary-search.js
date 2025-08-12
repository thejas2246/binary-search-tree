import { mergeSort } from "./merge-sort.js";
import { removeDulplicates } from "./remove-duplicate.js";
import { Node } from "./node.js";
class Tree {
  constructor(arr) {
    this.arr = removeDulplicates(arr);
    mergeSort(this.arr);
    this.root = this.buildTree(this.arr);
    this.prettyPrint(this.root)
  }

  buildTree(arr, start = 0, end = arr.length - 1) {
    if (start > end) {
      return null;
    }
    let mid = Math.floor((start + end) / 2);
    let root = new Node(arr[mid]);
    root.left = this.buildTree(arr, start, mid - 1);
    root.right = this.buildTree(arr, mid + 1, end);

    return root;
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  insert(value,root = this.root){
    if(root == null){
      root = new Node(value);
    }
    if(root.data === value){
      return
    }
    if(value>root.data){
      if(!root.right){
        let node = new Node(value);
        root.right = node
        return
      }
      else{
        this.insert(value,root.right);
      }
    }
    else{
      if(!root.left){
        let node = new Node(value);
        root.left = node;
        return
      }
      else{
        this.insert(value,root.left);
      }
    }
    
  }

  print(){
    this.prettyPrint(this.root);
  }
}

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let test = new Tree(arr)
test.insert(27);
test.insert(31);
test.insert(67);

test.print();