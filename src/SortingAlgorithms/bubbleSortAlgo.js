function bubbleSortAlgo(arr, final){
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length-i-1; j++){
            final.push([j, j+1]);
            final.push([j, j+1]);
            if (arr[j] > arr[j+1]) {
                final.push([j, arr[j+1]]);
                final.push([j+1, arr[j]]);
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            else {
                final.push([j, arr[j]]);
                final.push([j+1, arr[j+1]]);
            }
        }
    }
}

export function getBubbleSort(arr){
    const final = [];
    bubbleSortAlgo(arr, final);
    return final;
}