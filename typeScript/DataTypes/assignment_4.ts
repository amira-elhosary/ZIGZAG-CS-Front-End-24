// assignments : https://elzero.org/typescript-assignments-lessons-from-12-to-21/

function yesOrNo(val: number) : "True" | "False" {
 if (val > 10) {
        return "True";
      } else {
        return "False";
      }
    }
  
  // Do Not Edit Here
  console.log(yesOrNo("100")); // Error
  console.log(yesOrNo(30)); // True
  console.log(yesOrNo(8)); // False