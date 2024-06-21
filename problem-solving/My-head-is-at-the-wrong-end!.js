// problem:
// https://www.codewars.com/kata/56f699cd9400f5b7d8000b55


function fixTheMeerkat(arr) {
    let head, body, tail;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'head') {
            head = arr[i];
        } else if (arr[i] === 'body') {
            body = arr[i];
        } else if (arr[i] === 'tail') {
            tail = arr[i];
        }
    }

    let array = [head, body, tail];
    return array;
}

// Example :
console.log(fixTheMeerkat(['tail', 'body', 'head']));
console.log(fixTheMeerkat(['tail', 'head', 'body'])); 
console.log(fixTheMeerkat(['body', 'tail', 'head'])); 

