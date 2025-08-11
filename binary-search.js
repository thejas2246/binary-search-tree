import { mergeSort } from "./merge-sort.js";

class Tree{
    constructor(arr){
        this.root = buildTree(arr);
    }

    buildTree(arr){
        mergeSort(arr);
        removeDulplicates(arr);
    }
}