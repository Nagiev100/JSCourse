//1
/*
Ваша задача - создать систему обработки заказов с использованием callback-функций.
Каждый заказ имеет свой уникальный номер, сумму и состояние (выполнен или не выполнен).
Вам нужно реализовать функции для добавления нового заказа, изменения состояния заказа и вывода информации о заказах.

// Объект для хранения заказов
const orders = {};

function addOrder(orderNumber, amount, callback) {
  Если заказа нет - добавить в список заказов с полем completed = false и колбэком вывести результат,
  иначе колбэком вывести сообщение о том, что заказ существует
}

function completeOrder(orderNumber, callback) {
   Если заказ существует - добавить в список заказов с полем completed = true и колбэком вывести результат,
  иначе колбэком вывести сообщение о том, что заказа нет
}

function listOrders(callback) {
  Пройтись по объекту заказов и вывести информацию в виде:
  Заказ #1 - Сумма: 50, выполнен
  Заказ #2 - Сумма: 30, не выполнен

  Сначала отформатируйте каждый заказ в таком виде, затем вызовите колбэк с отформатированным ордер-листом
}

// Использование системы обработки заказов
addOrder(1, 50, (message) => console.log(message));
addOrder(2, 30, (message) => console.log(message));
completeOrder(1, (message) => console.log(message));
listOrders((orderList) => console.log(orderList));
*/

const orders = {};

function addOrder(orderNumber, amount, callback) {
    if (!orders[orderNumber]) {
        orders[orderNumber] = {amount, completed: false}
        return callback(`Заказ с номером ${orderNumber} был создан`)
    }
    callback(`Заказ с номером ${orderNumber} уже существует`)
}

function showMessage(string) {
    console.log(string)
}

function completeOrder(orderNumber, callback) {
    if (orders[orderNumber]) {
        orders[orderNumber] = {completed: true}
        return callback(`Заказ с номером ${orderNumber} был выполнен`)
    }
    callback(`Заказ с номером ${orderNumber} не существует`)
}

function listOrders(callback, obj) {
    for (key in obj) {
        callback(`Заказ ${key} - Сумма ${obj[key].amount}, ${obj[key].completed}`)
    }
}

addOrder(4, 12, showMessage)
completeOrder(5, showMessage)
listOrders(showMessage, orders)


//2
/*
Ваша задача - создать систему для загрузки данных о пользователях из удаленного сервера с использованием промисов.
У вас есть URL сервера, который предоставляет данные о пользователях в формате JSON.
Вам нужно реализовать функцию для загрузки данных и обработать результат.
*/

const usersDataURL = 'https://jsonplaceholder.typicode.com/users';

function loadUserData() {
    return new Promise((resolve, reject) => {
        fetch(usersDataURL)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

loadUserData()
    .then((data) => console.log(data))
    .catch((error) => console.log('Ошибка при загрузке данных:', error))

//3
// Переписать loadUserData с помощью async/await

async function loadUserData2() {
    try {
        const response = await fetch(usersDataURL)
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.log('Ошибка при загрузке данных:', e)
    }
}

loadUserData2();

//4
/*

Ваша задача - создать систему для одновременной загрузки данных о пользователях и их постах с использованием Promise.all.
 У вас есть два URL: один для данных о пользователях, а другой для их постов в формате JSON.
 Вам нужно реализовать функцию для одновременной загрузки обоих наборов данных и обработки результатов.

const usersDataURL = 'https://jsonplaceholder.typicode.com/users';
const postsDataURL = 'https://jsonplaceholder.typicode.com/posts';

function loadUserData() {}
function loadPostsData() {}

Promise.all([loadUserData(), loadPostsData()]) // здесь надо вывести данные в случае успеха и в случае ошибки

Затем то же самое с Promise.race()
*/
const usersDataURL1 = 'https://jsonplaceholder.typicode.com/users';
const postsDataURL = 'https://jsonplaceholder.typicode.com/posts';

async function loadUserData3() {
    try {
        const response = await fetch(usersDataURL1)
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.log('Ошибка при загрузке данных:', e)
    }

}

async function loadPostsData() {
    try {
        const response = await fetch(postsDataURL)
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.log('Ошибка при загрузке данных:', e)
    }
}

Promise.all([loadUserData3(), loadPostsData()]) //PROMISE API
Promise.race([loadUserData3(), loadPostsData()])

//5
/*
Вы - анонимусы, и вам необходимо провести DDos-атаку на https://jsonplaceholder.typicode.com
Раз в полсекунды отправляйте рандомный запрос на сервер (либо /users, либо /posts)
*/
/*setInterval(
      () => {
          const request = [loadUserData3,loadPostsData]
          const random = Math.floor(Math.random() + request.length - 1)
          request[random]();
      }
  ,500)*/

//6

console.log('1'); // 1 Это макро таска

setTimeout(() => {
    console.log('2'); // 5 отработала очередь мирокро тасок. SetTimeOut пораждает макротаску и так как нет микротаск ма наинаем выполнять макротаск в том порядке в котром они попадают в стэк
}, 0);

setTimeout(() => {
    console.log('3'); // 6 SetTimeOut пораждает макротаску и так как нет микротаск ма наинаем выполнять макротаск в том порядке в котром они попадают в стэк
    Promise.resolve().then(() => console.log('4')); // 7 у нас then попадает в очередь мирко таск
}, 0);

Promise.resolve().then(() => {
    console.log('5'); // 3  у нас then попадает в очередь мирко таск
    setTimeout(() => console.log('6'), 0); // 8 это последняя макро таска
});

Promise.resolve().then(() => {
    console.log('7'); // 4  у нас then попадает в очередь мирко таск
});

console.log('8'); // 2 Это макро таска
