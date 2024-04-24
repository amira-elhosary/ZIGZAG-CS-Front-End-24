function binarySearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === x) {
            return mid; 
        } else if (arr[mid] < x) {
            low = mid + 1; 
        } else {
            high = mid - 1; 
        }
    }

    return -1; 
}

// Example :
 arr = [0,1,2,3,4,5,6,7,8,9,10];
let x = 5;
let index = binarySearch(arr, x);
if (index === -1) {
    console.log(`Can't Find ${x}`);
} else {
    console.log(` value ${x} found at index ${index}`);
}