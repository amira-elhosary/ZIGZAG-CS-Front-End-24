function merge(MergedArr, left, middle, right) {
    let n1 = middle - left + 1;
    let n2 = right - middle;
  
    let RightArr = new Array(n1);
    let LeftArr = new Array(n2);
  
    for (let i = 0; i < n1; i++)
    RightArr[i] = arr[left + i];
    for (let j = 0; j < n2; j++)
    LeftArr[j] = arr[middle + 1 + j];
  
    let i = 0; 
    let j = 0; 
    let k = left; 
  
    while (i < n1 && j < n2) {
        if (RightArr[i] <= LeftArr[j]) {
            MergedArr[k] = RightArr[i];
            i++;
        } else {
            MergedArr[k] = LeftArr[j];
            j++;
        }
        k++;
    }
  
    while (i < n1) {
        MergedArr[k] = RightArr[i];
        i++;
        k++;
    }
  
    while (j < n2) {
        MergedArr[k] = LeftArr[j];
        j++;
        k++;
    }
}
  
function mergeSort(arr, l, right) {
    if (l < right) {

        let m = Math.floor(l + (right - l) / 2);
  
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, right);
  
        merge(arr, l, m, right);
    }
}
  
// Example
let arr = [100, 5, 50, 0, 20, -1];
  
console.log("Given array:");
console.log(arr);

mergeSort(arr, 0, arr.length - 1);
console.log("Sorted array:");
console.log(arr);