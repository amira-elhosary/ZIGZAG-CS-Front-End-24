// problem
// https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/R

function ageInDays(num) {
    if (num >= 0 && num <= 10 ** 6) {
        let years = parseInt(num / 365);
        let months = parseInt((num % 365) / 30);
        let days = parseInt(num - (years * 365 + months * 30));

        console.log(`${years} Years`);
        console.log(`${months} Months`);
        console.log(`${days} Days`);
    }
    else{
        console.log("invalid input");
    }
}

// Example
let num = 542;
ageInDays(num);
