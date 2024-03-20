// problem:
// https://www.codewars.com/kata/56f699cd9400f5b7d8000b55



//////////////////////////// sol:
// function fixTheMeerkat(arr) {
// return arr.reverse(); 
// }



/////////////////////////another sol:
function fixTheMeerkat(arr) {
    let reverse = [];
    for (let i = 0; i <arr.length; i++) {
        reverse.unshift(arr[i]);
    }
    return reverse;
}