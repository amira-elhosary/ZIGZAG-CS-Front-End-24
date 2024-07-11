// assignments : https://elzero.org/typescript-assignments-lessons-from-1-to-11/

function printInConsole(...args: (string | number | boolean)[]) {
    args.forEach(arg => {
      console.log(`The Value Is ${arg} And Type Is ${typeof arg}`);
    });
    console.log("Done");
  }
  
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));