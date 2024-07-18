// assignments : https://elzero.org/typescript-assignments-lessons-from-32-to-38/

// Write Function Code Here
function showTypes<T1 = undefined, T2 = undefined, T3 = undefined>(a ?: T1, b?: T2, c?: T3): string {
    const result = [
        a ? a.toString() : "Nothing",
        b ? b.toString() : "Nothing",
        c ? c.toString() : "Nothing"
    ];
    return result.join(" - ");
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true
