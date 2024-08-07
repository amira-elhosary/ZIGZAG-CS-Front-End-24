// assignments : https://elzero.org/typescript-assignments-lessons-from-1-to-11/

function showMsg(user?: string, age?: (string|number), country?: string) {
    return `${user}${age}${country}`;
  }
  
  console.log(showMsg());
  console.log(showMsg("Elzero"));
  console.log(showMsg("Elzero", 40));
  console.log(showMsg("Elzero", "40", "Egypt"));