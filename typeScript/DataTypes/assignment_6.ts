// assignments : https://elzero.org/typescript-assignments-lessons-from-12-to-21/

let post : readonly [number, string, boolean];
post = [100, 200, "Title"]; // Error
post = ["Title", 100, true]; // Error
post = [100, "Title", true]; // Good

post.push("Elzero"); // Error => Cant Add

// Create Destructuring Here
const [id, title, state] = post;
// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true