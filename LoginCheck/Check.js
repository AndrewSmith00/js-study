let currentUserName = prompt("Enter your name", '');
let password;

if(currentUserName == "Админ") {
    password = prompt("Enter your password");

    if(password == "Я Главный") {
        alert("Здравствуйте!");
    }
    else if(password === '' || password == null) {
        alert("Отменено");
    }
    else {
        alert("Неверный пароль");
    }
}
else if(currentUserName === '' || currentUserName == null) {
    alert("Отменено");
}
else {
    alert("Я вас не знаю");
}