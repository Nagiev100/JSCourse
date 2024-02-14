// 1
function multiplyTable(n) {
    if (n <= 0 || isNaN(n)) {
        console.log("Введите целое положительное число");
        return;
    }
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            row += (i * j) + " ";
        }
        console.log(row);
    }
}
multiplyTable(10)
/*
 Создать функцию multiplyTable, которая принимает число n
 и выводит таблицу умножения для чисел от 1 до n. Используйте вложенные циклы для создания таблицы.

 Условия:

 - Функция должна принимать целое положительное число n.
 - Выводить таблицу умножения для чисел от 1 до n.

 Например multiplyTable(5);
    // Вывод:
    // 1 2 3 4 5
    // 2 4 6 8 10
    // 3 6 9 12 15
    // 4 8 12 16 20
    // 5 10 15 20 25
 */

// 2
/*function calculateFactorial(n) {
    /!*if (isNaN(n)) {
        console.log("Введите число");

    }else if (n === 0) {
        console.log('Факториал числа 0 равен 1')
    }*!/
    let result = 1;
    for (let i = 0; i <= n; i++){
        result = i ;
    }
    return result;
}
calculateFactorial(10)*/
function calculateFactorial(n) {
    if (isNaN(n)) {
        return "Введите число";
    } else if (n === 0) {
        return 'Факториал числа 0 равен 1';
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(calculateFactorial(0));
/*
  Создать функцию calculateFactorial, которая принимает число n
  и возвращает факториал этого числа. Факториал числа - это произведение всех положительных целых чисел от 1 до этого числа включительно.

  Условия:

  Функция должна принимать целое положительное число n.
  Факториал 0 и 1 равен 1.

  Например: calculateFactorial(5);
  // Вывод: 120 (1 * 2 * 3 * 4 * 5)
 */

//3
function addWithLoss(a, b, precision = 1) {
    if (isNaN(a) || isNaN(b)) {
        return "Все параметры должны быть типа number";
    }
    const result = a + b;
    return parseFloat(result.toFixed(precision));
}
console.log(addWithLoss('gewf', 2.002));
/*
 Создать функцию addWithLoss, которая принимает два числа
 и возвращает их сумму с потерей точности. Функция должна округлить результат сложения до определенного количества знаков после запятой.

 Условия:

 Функция должна принимать два числа.
 Опционально, функция может принимать третий параметр — количество знаков после запятой для округления результата (по умолчанию 1).
 Функция должна возвращать число

 Например:
 addWithLoss(0.1, 0.2);
 // Вывод: 0.3 (вместо ожидаемого 0.30000000000000004)

 addWithLoss(1.001, 2.002, 2);
 // Вывод: 3 (вместо ожидаемого 3.003)

*/

//4
function processText(text) {
    if (typeof text !== "string"){
       return  'Введите строку';
    }
   return text.trim().toLowerCase().replace(/a/g, 'X');
}
console.log(processText(" Hi Bro "))
/*Создать функцию processText, которая принимает строку текста и выполняет следующие операции:

Удаление пробелов в начале и конце строки.
Преобразование текста в нижний регистр.
Замена всех символов "a" на символ "X".

Например:
processText("   Hello, World!   ");
// Вывод: "xello, world!"

processText("Another Example");
// Вывод: "xXother exXmple"

*/

//5
function encode_string(s, key) {
    if (typeof s !== "string" || isNaN(key)){
        return 'Не коректные данные первое значиние должно иметь тип String а второе Number '
    }
    let encoded = '';
    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        const encodedCharCode = charCode + key;
        encoded += String.fromCharCode(encodedCharCode);
    }
    return encoded;
}

function decode_string(s, key) {
    if (typeof s !== "string" || isNaN(key)){
        return 'Не коректные данные первое значиние должно иметь тип String а второе Number '
    }
    let decoded = '';
    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        const decodedCharCode = charCode - key;
        decoded += String.fromCharCode(decodedCharCode);
    }
    return decoded;
}
console.log(encode_string("Hello, World!", 5));
console.log(decode_string("Mjqqt1%\\twqi&\n", 5));

/*Задача: Кодирование и декодирование строки
 Необходимо создать программу для кодирования и декодирования строк.
 Кодирование осуществляется следующим образом: каждый символ строки заменяется на его ASCII код (String.fromCharCode),
 затем к получившимся числам добавляется заданное число (назовем его "ключ").
 Декодирование, соответственно, происходит в обратном порядке.

 1. Напишите функцию encode_string(s, key), которая принимает на вход строку s и целое число key,
 и возвращает закодированную строку.

 Например:
 encode_string("Hello, World!", 5)
 вывод: "Mjqqt, 1twnl!"

 2. Напишите функцию decode_string(encoded_s, key),
 которая принимает закодированную строку и ключ, и возвращает декодированную строку.

 Например:
 decode_string("Mjqqt, 1twnl!", 5)
 вывод: "Hello, World!"

 */