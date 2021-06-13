var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function anClean (array) {
   var buffer = [];

    for (let i = 0; i < array.length; i++) {
        var filteredWords = array[i].toLowerCase().split('').sort().join('');
        buffer[filteredWords] = array[i];
    }
    return Object.values(buffer);
}

console.log(anClean(arr));