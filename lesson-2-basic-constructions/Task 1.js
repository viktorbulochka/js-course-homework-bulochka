var userString = prompt("Введите строку на русском языке:",'');

function vowelCounter (typedString) {
    var countedString = typedString.toString().toLowerCase().replace(/["ёуеыаоэяию"]/g,'');
    return "Количество гласных составляет: " + (typedString.length - countedString.length) ;
}

alert(vowelCounter( userString ));
