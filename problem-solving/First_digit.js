// problem
// https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/P


function firstDigit(num) {

    if (num > 999 && num <= 9999) {
        let NumToSTRING= num.toString();
        if (NumToSTRING[0] % 2 === 0) {
            console.log("EVEN");
        } else {
            console.log("ODD");
        }
    } else {
        console.log("Invalid Number");
    }
}

// Example
let num = 1234;
firstDigit(num);
