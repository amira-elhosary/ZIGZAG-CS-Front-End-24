// problems :
// https://elzero.org/javascript-bootcamp-assignments-lesson-from-123-to-133/

console.log("------------------------assignment 1-------------------------");

let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log(Array.from(setOfNumbers)[2]);

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

console.log("------------------------assignment 2-------------------------");

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log(new Set(myFriends.sort()));

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

console.log("------------------------assignment 3-------------------------");

let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};
let Mapp = new Map(Object.entries(myInfo));
console.log(Mapp);
console.log(Mapp.size);
console.log(Mapp.has("role"));

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

console.log("------------------------assignment 4-------------------------");

let theNumber = 100020003000;
console.log(+[...new Set(theNumber.toString())].filter(char => char !== '0').join('')); 

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

console.log("------------------------assignment 5-------------------------");

let theName = "Elzero";
console.log(Array.from(theName)); //1
console.log(theName.split(""));//2
console.log([...theName]);//3
console.log(Object.assign([], theName));//4
let arr = [];//5
for (let char of theName) {
  arr.push(char);
}
console.log(arr);

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

console.log("------------------------assignment 6-------------------------");

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
chars.sort();
chars.copyWithin(0, 3, 6);
console.log(chars);

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

console.log("------------------------assignment 7-------------------------");

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log([...numsOne, ...numsTwo]);//1
console.log(numsOne.concat(numsTwo));//2
numsOne.push(...numsTwo);//3
console.log(numsOne);

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

console.log("------------------------assignment 8-------------------------");
 
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log(Number(Math.max(...n1)) * [...n1, ...n2].length);







