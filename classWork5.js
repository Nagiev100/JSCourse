/*
1.
const person = {
  name: "Pete",
  age: 24,
  salary: 2550,
  street: "Some street",
  houseNum: 52
}

Создайте функцию, которая выводит среднее арифметическое всех числовых значений объекта и выводит результат в консоль
 */
const person = {
    name: "Pete",
    age: 24,
    salary: 2550,
    street: "Some street",
    houseNum: 52
}
function calculationValue (obj){
    if (typeof obj !== 'object') return console.log('Используемый аргумент должен иметь тип object');
    let result = 0;
    let count = 0 ;
    for (el in obj) {
        if (typeof obj[el] === 'number') {
            result += obj[el];
            count++;
        }
    }
    result = Math.round(result / count)
    return result
}

console.log(calculationValue(person))
/*
2.
//TODO: максимально часто встречающаяся задача на фронте

Необходимо создать функцию formatDate,
которая принимает объект Date и возвращает строку с отформатированной датой в следующем виде: "DD.MM.YYYY, HH:mm:ss".

1. Создайте функцию formatDate, которая принимает параметр date - объект Date.
2. Используя методы объекта Date, получите значения года, месяца, дня, часа, минут и секунд.
3. Добавьте ведущий ноль к значениям, если они состоят из одной цифры.
4. Сформируйте строку в формате "DD.MM.YYYY, HH:mm:ss".
5. Верните отформатированную строку.

Пример использования:

const currentDate = new Date();
const formattedDate = formatDate(currentDate);

Подсказка: Месяцы начинаются с нуля
*/
function formatDate(date) {
    let dateInfo = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    };
    for (let key in dateInfo) {
        dateInfo[key] = addLeadingZero(dateInfo[key]);
    }
    let formattedDate = `${dateInfo.day}.${dateInfo.month}.${dateInfo.year},${dateInfo.hours}:${dateInfo.minutes}:${dateInfo.seconds}`;
    return formattedDate;
}
function addLeadingZero(number) {
    return number < 10 ? '0' + number : number;
}

const currentDate = new Date();
console.log(formatDate(currentDate));

/*
3.
Напишите кастомный Object.assign,
который принимает на вход целевой объект для копирования и копируемый объект и возвращает целевой
    function customAssign(target, source) {
        //code
        return target
    }
 */
function copyProperties (target,source){
    if (typeof target !== 'object' || typeof source !== 'object'){
        return console.log('Оба параметра должны иметь тип Object');
    }
    let keys = Object.keys(source);
    for (el of keys){
        target[el] = source[el];
    }
    return target
}

let target = { a: 1, b: 2 };
let source = { b: 3, c: 4 };
copyProperties(target,source);
console.log(target)