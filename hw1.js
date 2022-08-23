// Задание 2
// Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) фразу: Привет, Николай! (вместо Николай должно показываться имя, которое ввел пользователь)

let user = prompt('Ваше имя?');
alert('Привет, ' + user);


// Задание 3
// Запросите у пользователя число. Затем запросите степень, в которую нужно возвести это число. Выведите в консоль результат.

let number1 = prompt('Число');
let number2 = prompt('Степень');
let result = number1 ** number2;

console.log(result);


// Задание 4
// Пройдите 5 уровней игры ЗДЕСЬ (до функций).

//    done


// Задание 5
// Создать произвольную переменную, присвоить ей значение. C помощью if написать условие: если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let string = 'hid';
if(string === 'hidden'){
    string = 'visible';
} else {
    string = 'hidden'
}

console.log(string);


// Задание 6
// Создать переменную и присвоить ей число.
// Записать условие:
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let number = 1;

if (number < 0){
    console.log('less then zero');
} else if(number > 0){
    console.log('Положительн);
} else{
    console.log('Равно 0');
}


// Задание 7

// Запросите у пользователя число и запишите его в переменную. 
// (Не забывайте, что от пользователя мы всегда получаем строку).
// Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5, то результат будет '0', если больше -  '1'. Выведите результат в консоль.


let numb = Number(prompt('Введите число'));

if (numb < 5 ){
  let result = 0;
 console.log(result);
} else if ( numb > 5){
    let result = 1;
 console.log(result);
}


// Задание 8

// Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел (наибольшее) с текстом: Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).

// * предусмотреть вариант ввода одинаковых чисел


let numb = Number(prompt('Введите число'));
let numb1 = Number(prompt('Введите число'));

if (numb > numb1){
console.log('Большее число: ' + numb);
} else if ( numb < numb1){
console.log('Большее число: ' + numb1);
}


// Задание 9

// Определить, является ли введенное пользователем число num1 кратным введенному числу num2. Обе переменные запрашиваем у пользователя, ответ выводим в консоль.


let num1 = Number(prompt('Введите число'));
let num2 = Number(prompt('Введите число'));
let result = num1 % num2;

if (result == 0){
console.log('Кратно');
} else {
console.log('Не кратно');
}


// Задание 10

// Запросить у пользователя средний балл, записать в переменную.
// Если средний балл 1-4 - вывести в консоль "Двоечник, иди учись!", если 5-8 - "Неплохо, но давай еще поднажмем!", если 9-10 - "Ого, да ты настоящий отличник!" (можно другие фразы - по желанию).


let num1 = Number(prompt('Введите Ваш среднй балл'));
let result = num1;

if (1 <= result & result <= 4){
    console.log('Двоечник, иди учись!');
} else if (5 <= result & result <= 8) {
console.log('Неплохо, но давай еще поднажмем!');
} else if (9 <= result & result <= 10) {
console.log('Ого, да ты настоящий отличник!');
}


// Задание 11
// Запросить у пользователя ответы на 2 вопроса:
// - балл за экзамен (от 0 до 100)
// - количество выполненных проектов (от 0 и больше)
// Вывести в консоль общий выпускной балл в соответствии с этими значениями:
// - 100, если балл за экзамен более 90 или количество проектов более 10.
// - 90, если балл за экзамен более 75 и количество проектов не менее 5.
// - 75, если балл за экзамен более 50 и количество проектов не менее 2.
// - 0 во всех других случаях.

let num1 = Number(prompt('Введите Ваш балл за экзамен (от 0 до 100)'));
let num2 = Number(prompt('Введите количество выполненных проектов (от 0 и больше)'));

if (num1 > 90 || num2 > 10){
    let result = 100;
    console.log(result);
} else if (num1 > 75 || num2 > 5){
    let result = 90;
    console.log(result);
} else if (num1 > 50 || num2 > 2){
    let result = 75;
    console.log(result);
} else {
    let result = 0;
    console.log(result);
}


// Задание 12
// День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.

// Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt. Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.


let days = Number(prompt('Введите количество дней аренды'));
let cost = 40;

if ( days >= 7){
    let totalCost = cost * days - 50;
    console.log(totalCost);
} else if (days <= 3 || days <= 6){
    let totalCost = cost * days - 20;
    console.log(totalCost);
}