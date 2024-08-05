function merge(arr, start, mid, end, tempArr, final){
    let k = start;
    let i = start;
    let j = mid+1;
    while (i <= mid && j <= end){
        final.push([i, j]);
        final.push([i, j]);
        if (tempArr[i] <= tempArr[j]){
            final.push([k, tempArr[i]]);
            arr[k++] = tempArr[i++];
        }
        else {
            final.push([k, tempArr[j]]);
            arr[k++] = tempArr[j++];
        }
    }
    while (i <= mid){
        final.push([i, i]);
        final.push([i, i]);
        final.push([k, tempArr[i]]);
        arr[k++] = tempArr[i++];
    }
    while (j <= end){
        final.push([j, j]);
        final.push([j, j]);
        final.push([k, tempArr[j]]);
        arr[k++] = tempArr[j++]; 
    }
}

function mergeSortAlgo(arr, start, end, tempArr, final){
    if (start === end) return;
    const mid = Math.floor((start+end)/2);
    mergeSortAlgo(tempArr, start, mid, arr, final);
    mergeSortAlgo(tempArr, mid+1, end, arr, final);
    merge(arr, start, mid, end, tempArr, final);
}

export function getMergeSort(arr){
    const final = [];
    if (arr.length <= 1) return arr;
    const tempArr = arr.slice();
    mergeSortAlgo(arr, 0, arr.length-1, tempArr, final);
    return final;
}