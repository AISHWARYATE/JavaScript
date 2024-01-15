//For...Loop...
for (let i=0;i<5;i++)
{
    console.log(i);
}
//FOR...OF...LOOP...
console.log("for...of loop");
let arr =[1,2,3,4,5];
for (let val of arr){
    console.log(val);
}
//FOR...IN...LOOP...
console.log('for...in loop');
const person={
    name:'john',
    age:28,
    role:'software developer'
};
for(let key in person){
    console.log(person[key]);
}
