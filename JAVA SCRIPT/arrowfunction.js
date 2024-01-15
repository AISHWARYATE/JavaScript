//============Type of arrow functions==================
//1----------------No parameter------------------------
const greet = ()=>"Hello";
console.log(greet());


//===================Single Parameter====================
const squre = (x)=> x*x;
console.log(squre(4));

//===================Multiple Parameter===================
const add =(x,y)=>{
  return x+y;
}
console.log(add(5,9));

//====================Function Body with Multiple Statement====
const greetPerson = (name) =>{
  const greeting ='hello,' +name + '!';
  return greeting;
}
console.log(greetPerson('Aiswarya'));

//=====================Returning Object Literals===============
const makePerson =(firstName,LastName)=>
  ({first: firstName,last: LastName});
console.log(makePerson("Aiswarya","Sree"));

//=============higher order functions and callbacks============
const numbers =[1,2,3,4];
const doubled =numbers.map(num => num*2);
console.log(doubled); 
