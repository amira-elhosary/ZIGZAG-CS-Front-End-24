// problem
// https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/B

function even(num){
    if(num>2){
    for (i = 1 ; i <= num; i++){
        if(i % 2 ===0){
            console.log(i);
        }
    }
}
else{
    console.log(-1);
}
}
// Example
even(15);