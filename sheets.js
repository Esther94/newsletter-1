let age = 144;
console.log('heello');
if(age < 0){// if age is negative
   alert("your age can not be negative");// run this
}else if (age == 21){// if age is 21
   alert("happy 21st birthday"); //run this 
}else if ((age%2) >0){ // if age is odd
   alert("not a bad age"); // run this
}else if (age% Math.sqrt (age) === 0){// if age is a perfect square
  alert("you have a perfect age");// run this
}

function greetings(){
   let result = prompt('how old are you');
   return result;
 }

let response = greetings();
alart("are you"+ response + " years old");
