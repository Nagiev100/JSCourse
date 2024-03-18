/*let h1 = document.createElement('h1');
h1.textContent = '1';
let btn = document.createElement('button');
btn.textContent = '+1'

document.body.append(h1);
document.body.append(btn);

btn.addEventListener('click', function (){
    let current = parseInt(h1.textContent);
    h1.textContent = current + 1;
})*/

// let input = document.createElement('input');
// input.value = 'blue'
// let clear = document.createElement('button');
// clear.textContent = 'clear'
// let block = document.createElement('div');
//
// block.classList.add('block')
//
// document.body.append(input);
// document.body.append(clear);
// document.body.append(block);
//
// function colorBlock () {
//     block.style.backgroundColor = input.value;
// }
//
// input.addEventListener('input',colorBlock);
// colorBlock ()
//
//
// clear.addEventListener('click',function (){
//     block.style.removeProperty('background-color')
//     input.value = '';
// })


/*
function createUoTitle (title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
}
function createTodoItemForm () {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group','mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите названиие нового дела';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn','btn-primary');
    button.textContent = 'добавить дело';

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return{
        form,
        input,
        button
    }
}
function createTodoList () {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
}

function createTodoItem (name) {
    let item = document.createElement('li');
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    item.classList.add('list-group-item','d-flex', 'justify-content', 'alain-items-center')
    item.textContent = name;

    buttonGroup.classList.add('btn-group','btn-group-sm');
    doneButton.classList.add('btn','btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn','btn-danger');
    deleteButton.textContent = 'Удалить';

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    return{
        item,
        doneButton,
        deleteButton
    }
}


document.addEventListener('DOMContentLoaded', function (){
    let container = document.getElementById('todo-app');
    let todoAppTitle = createUoTitle('Список дел')
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

     container.append(todoAppTitle);
     container.append(todoItemForm.form);
     container.append(todoList);

     todoItemForm.form.addEventListener('submit', function (e){
         e.preventDefault();
         if(!todoItemForm.input.value){
             return;
         }
         todoList.append(createTodoItem(todoItemForm.input.value).item);
         todoItemForm.input.value = '';
     })
})*/
