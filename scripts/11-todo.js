

// to print the todo in web page as p tag instead of console
//Algorithm
//loop through the todo Array
//create html from JS
//render it on html page


const todoInput = [];

renderTodoList()

function renderTodoList(){
  let todoHTML = []
  for(i=0;i<todoInput.length;i++){
    let html = `<p>${todoInput[i]}</p>`
    todoHTML += html
  }
  document.querySelector('.js-todo-html').innerHTML = todoHTML
}

function todoList(){
  let inputElement = document.querySelector('.js-todo-input');
  const input = inputElement.value; 
  todoInput.push(input);
  console.log(todoInput)
  inputElement.value = ''
  renderTodoList()
  toUpper(['hello', 'john']);
  arrayDouble(['bark', 'meow'])
}

function toUpper(strArray1){

 //strArray1 = ['hello', 'john']
  let array2 = []
  array2 += String(strArray1).toUpperCase();
  console.log(Array(array2))
  
}

/*
Write a function arrayDouble that takes an array and console.logs a new array with every value repeated twice.

Example: arrayDouble(['bark', 'meow']); will console.log(['bark', 'bark', 'meow', 'meow'])

algorithm

declare array1 and iterate through it
create accumulator array to save the result of array1
push value twice
console the log
*/

function arrayDouble(strArr1){
  let strArr2 = []

 /* for(i=0;i<strArr1.length;i++){
    strArr2.push(strArr1[i])
    strArr2.push(strArr1[i])
  } */

  //or

  strArr1.forEach(function(value){
    strArr2.push(value)
    strArr2.push(value)
  });
console.log(strArr2)

}







