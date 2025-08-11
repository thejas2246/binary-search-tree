export function mergeSort(arr,left = 0,right = arr.length-1 ){
    if(left >= right){
        return 0;
    }
    else{
        let mid = Math.floor((left + right)/2);
        mergeSort(arr,left,mid);
        mergeSort(arr,mid+1,right);
        merge(arr,left,mid,right);
    }
}

function merge(arr,left,mid,right){
    let i = left;
    let j = mid+1;
    let temp = [];
    while(i<=mid && j<=right){
        if(arr[i]<=arr[j]){
            temp.push(arr[i]);
            i++;
        }
        else{
            temp.push(arr[j]);
            j++;
        }
    }

    while(i<=mid){
        temp.push(arr[i]);
        i++;
    }
    while(j<=right){
        temp.push(arr[j]);
        j++;
    }

    for(let k = left; k<=right; k++){
        arr[k] = temp[k-left];
    }
}
