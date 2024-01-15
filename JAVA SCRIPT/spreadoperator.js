//spread opertor allows us to quickly copy all or part of an existing array or object into another array or object
//examlpe with array
set1 =[1,2,3,4,5]
set2=[set1,6,7,8,9,10]
console.log("set 2",set2);
 //example with object
 set1={
    name:"abc",
    email:"abc@gmail.com"
 }
 set2={
    ...set1,
    age:24
 }
 console.log("set2 is",set2);