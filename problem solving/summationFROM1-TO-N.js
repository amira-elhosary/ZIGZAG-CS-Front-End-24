// problem
// https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/G

function summation (N){
    if (N > 0 && N <= 10e8) {
        let sum = 0 ;
        for (i=1; i<=N; i++){
            sum+=i;
        }
        console.log(sum);  
    }
   else{
    console.log("invalid input");
   } 
}
// Example
summation(5);