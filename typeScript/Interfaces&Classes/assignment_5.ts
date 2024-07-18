//assignments : https://elzero.org/typescript-assignments-lessons-from-22-to-31/

class Shorten {
  constructor(public id: number, public username: string, protected title: string) { }
}

let tester = new Shorten(100, "Elzero", "Developer");

console.log(tester.id);
console.log(tester.username);