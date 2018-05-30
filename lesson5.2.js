/*
Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена (escape) –
выводить «Вход отменён», если вводит что-то другое – «Я вас не знаю».

Пароль проверять так. Если введён пароль «Чёрный Властелин», то выводить «Добро пожаловать!»,
иначе – «Пароль неверен», при отмене – «Вход отменён».

*/

"use strict";


var userName = prompt("who are you ? ", 'user');

if(userName == undefined){
    alert("Вход отменен")
} else if (userName == "Admin"){
    var passWord = prompt("password ?");
    if (passWord == undefined){
        alert("Вход отменен")
    } else if (passWord == "Black lordship"){
        alert('Welcome aboard')
    } else {
        alert('go away stranger')
    }
} else {
    alert("who are you , stranger ?")
}
