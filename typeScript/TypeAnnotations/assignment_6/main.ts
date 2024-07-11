// assignments : https://elzero.org/typescript-assignments-lessons-from-1-to-11/

let nothing;
let theName: string = "Elzero";
function showMyDetails(a = "", b = "", c) {
  return `${a}${b}${c}`;
}

// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(nothing,nothing,theName)); // Elzero