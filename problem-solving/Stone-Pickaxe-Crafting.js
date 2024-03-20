//problem
// https://www.codewars.com/kata/65c0161a2380ae78052e5731

function stonePick(arr) {
    let sticks = 0;
    let cobblestone = 0;
    let wood = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Sticks") {
            sticks++;
        } else if (arr[i] === "Cobblestone") {
            cobblestone++;
        } else if (arr[i] === "Wood") {
            wood++;
        }
    }

    sticks += wood * 4;

    let pickaxes = Math.min(Math.floor(sticks / 2), Math.floor(cobblestone / 3));

    return pickaxes;
}