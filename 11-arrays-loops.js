let randomNumber = Math.random();
while(randomNumber < 0.5)
{
  console.log(randomNumber);
  break;
}

//accumulator pattern is where you declare a valriable with 0 and use that variable to append the results. eg is below

//lets assume an array contains [1,1,3] 
//you need to double the number and 
//make a copy as a second array and
// print it

const array1 = [1,1,3];
let array2 = [];

for(i=0;i<array1.length;i++){
 // array2[i] = array1[i] * 2;
  //or can be done with push

  array2.push(array1[i] * 2);
  
}
console.log(array1);
console.log(array2);


