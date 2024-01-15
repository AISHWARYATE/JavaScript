let num =Math.floor(Math.random()*100)
// console.log("num",num)
const f1 =(x) =>{
    return x+num
}
console.log(f1(5));// this not a pure function because of the argument is passed is same but the output is not same.

//example of pure function
const f2 =(x,y) =>{
    return x+y
}
console.log('num',f2(10,5));//the output is 15 this is a pure function

//  pure function in object
let fruit = {name:'banana',color:'green'}
const ripe=(item)=>{
    item.color = 'yellow'
    return item
}
let ripeBanana = ripe(fruit)
console.log(ripeBanana);
console.log(fruit);//this is not a pure funtion beacuse ripe function mutate green to yelow side effect
//this can be change as pure function by...
let fruitp = {name:'banana',color:'green'}
const ripep=(item)=>{
    // item.color = 'yellow'
    return {...item,color:'yellow'}
}
let ripeBananap = ripe(fruit)
console.log(ripeBananap);
console.log(fruitp);