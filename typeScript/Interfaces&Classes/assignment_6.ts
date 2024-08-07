//assignments : https://elzero.org/typescript-assignments-lessons-from-22-to-31/

class Show {
    constructor(private _title: string) { }
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
}

let tester = new Show("Elzero");

console.log(tester.title); // Property 'title' does not exist on type 'Show'
tester.title = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(tester.title); // Property 'title' does not exist on type 'Show'