function initialsValidator(initial) {
    let newInitial = initial.toString().trim().toLowerCase().replace(/[\s]/g, '');
    newInitial = newInitial.charAt(0).toUpperCase() + newInitial.slice(1) ;
    return newInitial;
}

var userName;
do {
    userName = prompt("Введите ваше имя:","");
    userName = String(userName).trim();
}
while ( userName === "" ||  userName === "null" || userName.length < 4 || parseInt( userName))
userName = initialsValidator( userName);

var userSurname;
do {
    userSurname = prompt("Введите вашу фамилию:", "");
    userSurname = String(userSurname).trim();
}
while (userSurname === "" || userSurname === "null" || userSurname.length < 4 || parseInt(userSurname))
userSurname = initialsValidator(userSurname);


var userMiddleName;
do {
    userMiddleName = prompt("Введите ваше отчество:", "");
    userMiddleName = String(userMiddleName).trim();
}
while (userMiddleName === "" || userMiddleName === "null" || userMiddleName.length < 4 || parseInt(userMiddleName))
userMiddleName = initialsValidator(userMiddleName);


let userAge;
do {
    userAge = prompt("Введите ваш возраст:", "");
}
while (userAge === "" || userAge === "null" || userAge < 4 || userAge > 102 || isNaN(userAge));


var userGender = confirm("Вы мужчина?");
userGender = genderValidator(userGender);

function genderValidator(userGender) {
    if (userGender) {
        return "мужской";
    } else {
        return "женский";
    }
}


var pension = pensionValidator(userGender, userAge);

function pensionValidator(userGender, userAge) {
    if (userGender === 'мужской' && userAge > 65) {
        return 'да';
    } else if (userGender === 'женский' && userAge > 60) {
        return 'да';
    }
    else {
        return 'нет'
    }
}


function userInformation (userName, userMiddleName, userSurname, userAge, userGender, pension) {
    return ("Ваше ФИО: " + userSurname + " " + userName + " " + userMiddleName + "\n" +"Ваш возраст в годах: "
        + userAge + "\n" + "Ваш возраст в днях: " + userAge * 365 + "\n" + "Через 5 лет вам будет: "
        + userAge + 5 + "\n" + "Ваш пол: " + userGender + "\n" + "На пенсии: " + pension )
}

alert (userInformation(userName, userMiddleName, userSurname, userAge, userGender, pension));