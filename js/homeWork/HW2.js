// 1
const user = {
    name: "Boris",
    age:24
}
user.firstName = user.name
delete user.name;

// переделайте объект таким образом, чтобы у него было 2 ключа: firstName и age

// 2
const fruitContainer = [];
fruitContainer.push('banana','apple','orange');
fruitContainer.splice(1,1,'potato');
// Добавьте 3 фрукта в массив fruitContainer
// Измените название второго фрукта

// 3
const yearsOfService = 4;
const performanceRating = 2;

function calculateEmployeeBonuses (yearsOfService,performanceRating){
    const employeeInfo = {
        bonus:'Сотрудник не получает бонус',
    }
    const isGoodReating = (performanceRating === 4 || performanceRating === 5);
    if(yearsOfService < 5 && isGoodReating){
        employeeInfo.bonus = 'Ваш бонус составляет 5% от заработной платы'
    }
    if (yearsOfService >= 5 && isGoodReating){
        employeeInfo.bonus = 'Ваш бонус составляет 10% от заработной платы'
    }
    return employeeInfo;
}
console.log(calculateEmployeeBonuses(yearsOfService,performanceRating))
/*
 Вам нужно создать программу на языке JavaScript для расчета бонусов сотрудникам
 в зависимости от их стажа и производительности. Используйте операторы и условные конструкции для выполнения задачи.

 Определение переменных:
 - Объявите переменную yearsOfService и присвойте ей значение, представляющее стаж сотрудника в годах (например, 5).
 - Объявите переменную performanceRating и присвойте ей значение от 1 до 5, представляющее оценку производительности сотрудника.

 Расчет бонуса:
 На основе стажа и оценки производительности рассчитайте бонус сотрудника. Используйте следующие правила:
   - Если стаж меньше 5 лет, и оценка производительности 4 или 5, бонус составляет 5% от заработной платы.
   -  Если стаж 5 лет или более, и оценка производительности 4 или 5, бонус составляет 10% от заработной платы.
   - В остальных случаях бонуса нет.

 Вывод результатов:
 Выведите результат расчета бонуса с использованием функции console.log. Если бонуса нет, выведите сообщение о том, что сотрудник не получает бонус.
 На основе всех переменных создайте объект employeeInfo с полученными переменными в виде значений
 */

// 4
const userData = {
    name: "Victor",
    age: 31,
    address: {
        street: '123 Main Street',
        city: 'Cityville',
        state: 'Stateville',
        zipCode: '12345'
    }
}

const userData2 = {
    name: "Vlad",
    age: "31",
    address: {
        street: '456 Oak Avenue',
        city: 'Townsville',
        state: 'Stateland',
        zipCode: null
    }
}

const data = [userData, userData2]

if (data[2]) {
    console.log("1") //в массиве нет [2], его длинна меньше
} else if (data[0].age === data[1].age && !(typeof data[0].name !== "string" || typeof data[1].address.zipCode)) {
    console.log("2") // что бы была истина и с лева и с права должна быть истина тут есть false поэтому на выходе будет false
} else if (typeof data[0].name === "string" && +data[1].age <= 0) { //во втором условии age не меньше и не равен 0
    console.log("3")
} else if (typeof data[1].address["zipCode"] === "object") {
    console.log("4") //тут все хорошо  null действительно имеет тип object это офицальный баг js
} else {
    console.log("5")
}

// Что будет выведено в консоли и почему

// 5
const programmingLanguage = 'dgfs';
switch (programmingLanguage){
    case "JavaScript":
        console.log('JavaScript - отличный выбор для веб-разработки!');
        break;
    case "Python":
        console.log('Python - мощный и удобный язык для разработки.');
        break;
    case "Java":
        console.log('Java - популярный язык для разработки кросс-платформенных приложений.');
        break;
    case "C++":
        console.log('C++ - язык с высокой производительностью и возможностями низкоуровневого программирования.');
        break;
    default:
        console.log('Такого языка программирования нет!!!')
}
/*
   Выбор языка программирования
   * Объявите переменную `programmingLanguage` и присвойте ей строковое значение,
    представляющее предпочтительный язык программирования (например, "JavaScript", "Python", "Java", "C++").

   * Используя оператор `switch`, напишите код, который выводит сообщение о том, почему выбранный язык программирования является отличным выбором. Например:
     - Если `programmingLanguage` равен "JavaScript", выведите "JavaScript - отличный выбор для веб-разработки!"
     - Если `programmingLanguage` равен "Python", выведите "Python - мощный и удобный язык для разработки."
     - Если `programmingLanguage` равен "Java", выведите "Java - популярный язык для разработки кросс-платформенных приложений."
     - Если `programmingLanguage` равен "C++", выведите "C++ - язык с высокой производительностью и возможностями низкоуровневого программирования."
     - Добавьте обработку для случая, когда `programmingLanguage` не соответствует ни одному из вышеперечисленных вариантов.

   * Вывод результатов:
    - Выведите сообщение о выборе языка программирования с использованием `console.log`.
 */