import { mergeSort } from "./merge-sort.js";
import { removeDulplicates } from "./remove-duplicate.js";
import { Node } from "./node.js";
class Tree {
  constructor(arr) {
    this.arr = removeDulplicates(arr);
    mergeSort(this.arr);
    this.root = this.buildTree(this.arr);
    
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
  deleteItem(value,root = this.root){
    if(!root){
      return root
    }
    if(value>root.data){
      root.right = this.deleteItem(value,root.right);
    }
    else if(value<root.data){
     root.left = this.deleteItem(value,root.left);
    }
    else{
      
      if(!root.right && !root.left){
        return null
      }
      else if(root.right ==null){
        return root.left
      }
      else if(root.left == null){
        return root.right
      }
      else{
        let min = this.findMin(root.right);
        root.data = min.data
        root.right = this.deleteItem(min.data,root.right)
      }

    }

    return root;
  }

  findMin(root){
    let min = root;
    while(root.left){
      root = root.left;
      if(root.data<min.data){
        min = root;
      }
    }
    return min
  }

  find(value,root = this.root){
    if(root == null) return root;

    let val
    if(value === root.data){
      return root;
    }
    else if(value<root.data){
      val = this.find(value,root.left);
      return val
    }
    else if(value>root.data){
      val = this.find(value,root.right)
      return val
    }
  }

  print(){
    this.prettyPrint(this.root);
  }

  levelOrderForEach(callBack=null,root = this.root){
    if(callBack===null){
      throw new Error("Can't call without callback")
    }
    if(root==null){
      return root;
    }
    let levelArray = [];
    levelArray.push(root);

    while(levelArray.length!==0){
      let val = levelArray.shift();
      if(val){
        callBack(val.data)
        if(val.left){
          levelArray.push(val.left);
        }
        if(val.right){
          levelArray.push(val.right);
        }
      }
    }
  }

  inOrderForEach(callBack=null,root = this.root){
    if(callBack==null){
      return root
    }
    
    if(root==null) return;

    callBack(root.data)
    this.inOrderForEach(callBack,root.left);
    this.inOrderForEach(callBack,root.right)
  }
  preOrderForEach(callBack=null,root=this.root){
     if(callBack==null){
      return root
    }
    
    if(root==null) return root;

    this.preOrderForEach(callBack,root.left);
    callBack(root.data)
    this.preOrderForEach(callBack,root.right)
  }
  postOrderForEach(callBack=null,root = this.root){
     if(callBack==null){
      return root
    }
    
    if(root==null) return root;

    this.postOrderForEach(callBack,root.left);
    this.postOrderForEach(callBack,root.right)
    callBack(root.data)
  }

  height(value,root = this.root,didFind = false){

    if(root==null) return -1;

    if(!didFind){
      let val = this.find(value);
      root = val;
      didFind = true
      if(!val){
        return null
      }
    }

      let lHeight = this.height(value,root.left,didFind);
      let rHeight = this.height(value,root.right,didFind)
      return Math.max(lHeight,rHeight)+1
  }

  depth(value,root = this.root,h=0){

    if(root===null) return root

    if(value===root.data){
      return h
    }
    else if(value>root.data){
      h = this.depth(value,root.right,h+1);
    }
    else if(value<root.data){
      h =this.depth(value,root.left,h+1)
    }
    return h
  }

}

function double(value){
  console.log(value*1)
}

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let test = new Tree(arr)
test.insert(27);
test.insert(31);
test.insert(67);
test.insert(66666);


test.print();
test.deleteItem(8)
test.deleteItem(9);
test.deleteItem(23);
test.deleteItem(67);
console.log(test.depth(3))
// test.inOrderForEach(double)
test.print()