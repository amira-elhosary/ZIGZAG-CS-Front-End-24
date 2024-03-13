// problem
// https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/W


function mathematicalExpression(A, S, B, Q, C) {
    let result = 0;
    switch (S) {
        case '+':
            result = A + B;
            break;
        case '-':
            result = A - B;
            break;
        case '*':
            result = A * B;
            break;
    }
    if (result === C) {
        return 'Yes';
    } else {
        return result;
    }
}

// Example
let A = 15;
let B = 10;
let S = "-";
const Q ="="
let C = 2;
if (A < 0 || A > 100 || B < 0 || B > 100 || C < -100000 || C > 100000 ){
    if(Q!="+" || Q!="-" || Q!="*") {
    console.log('Invalid input');
    }
} else {
    console.log(mathematicalExpression(A , S, B, Q, C));
}
