// driver.js
import { Tree } from './binary-search.js'; // your Tree class file

// Function to make an array of random numbers
function randomArray(size, maxValue) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * maxValue));
}

// 1. Create BST from random numbers < 100
let arr = randomArray(10, 100);
let bst = new Tree(arr);

console.log("Initial tree:");
bst.print();

// 2. Confirm balanced
console.log("Is balanced?", bst.isBalanced());

// 3. Print all traversals
console.log("Level order:");
bst.levelOrderForEach((v) => console.log(v));
console.log("Pre order:");
bst.preOrderForEach((v) => console.log(v));
console.log("Post order:");
bst.postOrderForEach((v) => console.log(v));
console.log("In order:");
bst.inOrderForEach((v) => console.log(v));

// 4. Unbalance tree by adding numbers > 100
[150, 200, 300, 400, 500].forEach((num) => bst.insert(num));

console.log("\nTree after unbalancing:");
bst.print();

// 5. Confirm unbalanced
console.log("Is balanced?", bst.isBalanced());

// 6. Balance tree again
bst.rebalence();

console.log("\nTree after rebalancing:");
bst.print();

// 7. Confirm balanced again
console.log("Is balanced?", bst.isBalanced());

// 8. Print all traversals again
console.log("Level order:");
bst.levelOrderForEach((v) => console.log(v));
console.log("Pre order:");
bst.preOrderForEach((v) => console.log(v));
console.log("Post order:");
bst.postOrderForEach((v) => console.log(v));
console.log("In order:");
bst.inOrderForEach((v) => console.log(v));
