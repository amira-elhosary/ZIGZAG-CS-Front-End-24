// problem
// https://www.codewars.com/kata/5662b14e0a1fb8320a00005c

function naughtyOrNice(year) {
    let nice = 0;
    let naughty = 0;

    for (let month in year) {
        for (let day in year[month]) {
            year[month][day] == "Nice" ? nice++ : naughty++
        }
    }
    if (nice >= naughty) {
        return 'Nice!';
    }
    else {
        return 'Naughty!';

    }
}