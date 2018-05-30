/*
Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
    ...
    sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

    С использованием цикла.
    Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
С использованием формулы для суммы арифметической прогрессии.
*/
"use strict";

function sumToRec(n) {
    if (n == 1) return 1;
    return n + sumToRec(n - 1);
}
function sumToLoop(n){
    var result = 0 ;
    for (var i = 1; i <= n; i++){
        result += i;
    }
    return(result)
}

function sumToArif(n) {
    return ((n * (n + 1)) / 2)
}

function fact(n){
    if (n == 1 ) return 1;
    return n*fact(n-1);

}

function fibboR(n) {
    if (n <= 1) return n;
    return fibboR(n-1)+fibboR(n-2)
}

function fibbo(n){
    var a = 1;
    var b = 1;
    for (var i=3;i<=n;i++){
        var c = a + b;
        a = b;
        b = c;
    }
    return b
}


alert(sumToRec(100));
alert(sumToLoop(100));
alert(sumToArif(100));
alert(fact(5));
alert(fibboR(7));
alert(fibbo(77));
