function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = current;
    }
    return arr;
}


// Example

arr= [5, 20, -10, 100, 50];

console.log("Given array:");
console.log(arr);

console.log("Sorted array:");
console.log(insertionSort(arr));
