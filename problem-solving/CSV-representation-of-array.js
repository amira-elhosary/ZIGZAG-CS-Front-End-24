// problem:
// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036


function toCsvText(array) {
    let csv = '';
    for (let i = 0; i < array.length; i++) {
        csv += array[i].join(',');
        if (i < array.length - 1) {
            csv += '\n';
        }
    }
    return csv;
}