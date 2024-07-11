// assignments : https://elzero.org/typescript-assignments-lessons-from-1-to-11/

let arr: (number | boolean[] | (string | (string | number)[])[])[];
arr = [];

arr.push(10);

arr.push([true, false]);

arr.push(["hello", [10, "hello"]]);

console.log(arr);
