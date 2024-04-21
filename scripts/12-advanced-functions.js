//In JS functions are values
//we can save a function in a variable
//we can pass a fucntion as argument inside another fucntion
//we can save a function inside an object

function display(){
  console.log('hello')
}
display();

//we can save a function in a variable

const res = function display(){
  console.log('hell0')
}
console.log(res)

//we can save a function inside an object
greeting() // this is called hoisting, we can call a function before the function, it does not follow order, but when function is stored in a variable , hoisting is not possible

function greeting(){
  console.log('hello')
}
greeting()

const object1 = {
  num:2,
  fun: function greeting(){
    console.log('greetings')
  }
}
object1.fun()

// code greeting() is not required so we can turn that as anonoymous func, i.e func without name

const object2 = {
  num:2,
  fun: function (){
    console.log('greetings')
  }
}
object2.fun()

//we can pass a fucntion as argument inside another fucntion
function run(param){
param();
}
run(function() { // this is called callback function, passing function inside while calling a func
  console.log('hello from callback')
});

//there is a built in callback function available in JS such as 
//setTimeout  - runs a function inside after specific wait time
//and setInterval - runs a fucntion inside for every given second

setTimeout(function(){
  console.log('Timeout')
}, 3000)

console.log('statement after setTimeout()') // this will get printed first and then code inside settimeout will execute after 3 sec ans this is called asyn behaviour
let isInterval = false

const intervalId= setInterval(function(){
  console.log('Interval')
isInterval = true
}, 1000)

//to stop interval, the function setInterval returns an id, use that
clearInterval(intervalId)


//forEach function also  be used to loop through array
//arrayvariable.forEach(callback function, index) example below
//however while using foreach , continue stmt doest work, so use return instead

const array1 = 
[
'make dinner',
'eat',
'sleep'
].forEach(function(arrayValue,index){ // this is callback function, function inside function
  if(arrayValue === 'make dinner'){
    return; // works as continue, so it will skip mae dinner and print rest
  }
  console.log(arrayValue) 
  console.log(index)
  }
);

//arrow functions - shortform to write functions
/*const arrowFunc = function() { // instead
  console.log('hello from arrow fun')
}*/

/*const arrowFunc = () => { // if single line inside function {} not required
  console.log('hello from arrow fun')
} */

const arrowFunc = () => console.log('hello from arrow fun')

arrowFunc()

/*if passing single value inside fun, () not required */

const arrowFunc1 = array2 => console.log(array2)

arrowFunc1(['cat','dog']);

//passing two param
const arrowFunc2 = (array2,index) => console.log(array2,index)

arrowFunc1(['cat','dog'], 2);

//aroow functions can be used inside object, but object provudes shorthand for defining functions already so its not recommended to use arrow func insdie object

const object3 = {
  method: ()=> {
console.log('method inside object using arrow func')
  },

  // shorthand provided by object is below
  method1() {
    console.log('method inside object using object shorthand')
  }
};

//array methods - filter and map
//filter creates a new array and return a value based on boolean
//if value is true will return the array with value else returns an empty array
//it works on truthy falsy value

//map creates an array and returns value whatever we created

console.log([1,1,5].filter((value1) => {
  //return true; //returns the array [1,1,3]
  //return false;  //returns empty array
  return value1 *2 //  return the original array [1,1,5]
}))

console.log([1,1,3].map((value1) => {
  //return true; //returns the array [1,1,3]
  return value1 * 2;  //returns empty array
}))

//shortcut for above map

console.log([1,1,5].map(value1 => value1 * 2));  //returns empty array)




