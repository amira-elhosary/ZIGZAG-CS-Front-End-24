// assignments : https://elzero.org/typescript-assignments-lessons-from-12-to-21/

type custom = "Yes" | "No"
function isHeOld(age: number): custom {

  if (age > 40) {
    return "Yes";
  } else {
    return "No";
  }

}

// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"