// problem:
// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036


function toCsvText(arr) {
    let csv= '';
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            csv += arr[i][j];
            if (j < arr[i].length - 1) {
                csv += ',';
            }
        }
        if (i < arr.length - 1) {
            csv += '\n';
        }
    }
    
    return csv;
}

// Example :
let inputArray = [
    [ 0, 1, 2, 3, 4 ],
    [ 10, 11, 12, 13, 14 ],
    [ 20, 21, 22, 23, 24 ],
    [ 30, 31, 32, 33, 34 ]
];

console.log(toCsvText(inputArray));

  