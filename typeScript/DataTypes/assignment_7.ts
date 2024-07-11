// assignments : https://elzero.org/typescript-assignments-lessons-from-12-to-21/

// Create Enums + Function Here
function getInsane(n): number {
    return Game.Hard - n;
}
enum Game {
    Easy = 100,
    Medium = Easy - 20,
    Hard = Medium - (Easy / 2),
    Insane = getInsane(10)
}

// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20