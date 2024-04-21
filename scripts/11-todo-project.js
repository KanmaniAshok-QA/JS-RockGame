//create an accumulator array to store the todo input values
//create a date picker input box
//get the todo name and date after clicking ADD button from html using DOM in JS
//create the todo name date array to html elements from JS
//display the todo name and date to html webpage using DOM
// create delete button next to todo name in webpage from JS
// so todo name, date and delete are going to be in an single array
//click in delete should erase the todo record from webpage 

let array2 = [] //create an accumulator array to store the todo input values
function todoList(){
  const inputElement = document.querySelector('.js-todo-input')
  const dateElement = document.querySelector('.js-todo-date')//get the input values after clicking ADD button from html using DOM
  const todoname = inputElement.value;
  const date = dateElement.value;
  array2.push({todoname,date}); //store the todo input values as object
  inputElement.value = '' // clear the input text box 
  dateElement.value = ''
  console.log(array2)
  renderTodoList();
}

function renderTodoList(){

  // we need to display the name and date in html, so we must loop thru array and get the name and date from array object and save it a variable
  let arrayHTML = []
  
  for(i=0;i<array2.length;i++){
    let todoObject = array2[i]
    let {todoname,date} = todoObject
    /*

    // another method to loop thru array

    array2 ['todoName:make breakfast', date: 22.11.2024,
            'pack things, 22.11.2024
          ]

    array2.forEach((val) => {

      let todoObject;

      //val contains= makebreakfast(todoName), 22.11.2024 (date)

      todoObject = val.todoName
      todoObject = val.date
    }

   // of instead of val use same name as variable declared let todoObject;

      array2.forEach((todoObject) => {
        todoObject = todoObject.todoName;
        todoObject = todoObject.name;

        //destructuring

        {todoName, date} = todoObject
      }
      

    

    }) */
    let html = `
    <p>${todoname} ${date}
    <button onclick = "
    array2.splice(${i},1)
    renderTodoList(); 
    ">Delete</button>
    </p>
    ` // create the todo name array to html webpage by creating html elements from JS
    // call rendertodolist to display the updated array else you cant see the deleted value in webpage bcoz splice only deletes value frm array but wont display it
    //next we need to add date along with name and delete button, but when we push to array
    arrayHTML += html
  }
  //console.log(arrayHTML)
  document.querySelector('.js-todo-html').innerHTML = arrayHTML //display the todo name array to html webpage using DOM

}



