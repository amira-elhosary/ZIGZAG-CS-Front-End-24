function bubbleSort(array) {
    for (let step = 0; step < array.length; step++) {
        for (let i = 0; i < array.length - step - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }
        console.log(array);

}

// Example

arr = [100, 20, 0, -50, 15];

console.log("Given array:");
console.log(arr);

console.log("Sorted array:");
bubbleSort(arr);
