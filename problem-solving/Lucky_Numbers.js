// problem
// https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/M

function isLucky(number) {
    const str = number.toString();
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '4' && str[i] !== '7') {
            return false;
        }
    }
    return true;
}

function LuckyNumbers(A, B) {
    let found = false;
    for (let i = A; i <= B; i++) {
        if (isLucky(i)) {
            console.log(i.toString());
            found = true;
        }
    }
    if (!found) {
        console.log(-1);
    }
}

// Example
const [A, B] = [4, 50];
LuckyNumbers(A, B);