// problem
// https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
    if (games.length !== 10) {
        return "invalid input";
    }

    let points = 0;
    for (let i = 0; i < games.length; i++) {
        let [x, y] = games[i].split(":").map(Number);
        if (x < 0 || x > 4 || y < 0 || y > 4) {
            return "invalid input";
        }
        else {
            if (x > y) {
                points += 3;
            } else if (x < y) {
                points += 0;
            } else {
                points += 1;
            }
        }
    }
    return points;

}
