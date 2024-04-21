let name = 'kevin';
name = 'son'
let i = 2
if(i < 5){
  let name = 'paul'
  console.log(name)
}
//console.log("after closure " + name)

const add = function() {
  console.log(2 + 3);
};

add();

//closure example

console.log('closure example with parent function calling multiple param')

function runTwice(fun) {
  fun();
}

runTwice(function() {
  console.log('12b');
});

runTwice(add);

//array method

/*

let array1 = [1,2,3,-6];
const array2 = array1.map((num,index) => {
 if(num < 0){
  array1.splice(index,1)
  return array1
 }
});

console.log(array2)
*/

function removeNegative(arr){
let newArr = [];
arr.forEach((x) => {
  if(x > 0) {
    newArr.push(x)
  }
});
console.log(newArr)
}

removeNegative([1,-3,6]);

//or using splice

function removeNegative(arr){
  let newArr = [];
  arr.forEach((x,index) => {
    if(x < 0) {
      arr.splice(index,1)
    }
    newArr =  arr;
  });
  console.log(newArr)
  }
  
  removeNegative([2,-3,6,0,-7,6]);

  //string reverse
  function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

function FirstReverse(str) { 

  let finalArr = [];
  const strLen = str.length - 1;
  for(i=strLen; i>=0;i--){
    finalArr += str[i];
  }
    // code goes here  
    return finalArr; 
  
  }
     
  // keep this function call here 
  console.log(FirstReverse('hello Kanmani'));

  // remove duplicate using filter and without filter

  //without filter

  let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

  let newArr = [];

  arr.forEach(item => {
    if( ! newArr.includes(item)){
    newArr.push(item); 
    }
    })
console.log(newArr)

  // using filter


  let arr1 = ["hello", "good", "morning", "joy", "hello", "good"];

  //console.log(arr1.includes('good').indexOf());

  function removeDuplicates(arr1){

 return arr1.filter( (val,index) => {

    arr1.indexOf(val) === index;

   // console.log(arr1.indexOf(val));
    

 });
 }


  console.log(removeDuplicates(arr1));

  //example from MDN https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_Strings

  const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
  const quoteLength = quote.length;
const substring = 'green eggs and ham';
if(quote.includes('green eggs and ham')){

const substringStartIndex = quote.indexOf(substring);
const substringEndIndex = quote.indexOf('.');
const beforeSubstring = quote.indexOf(quote);
console.log(beforeSubstring)
console.log(quote.slice(beforeSubstring,substringEndIndex +1));

}

// Add your code here

// Don't edit the code below here!

//const para1 = result;
    

  





