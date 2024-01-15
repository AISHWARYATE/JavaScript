//Destructure in Array
values=[10,20,30]
let [a,b,c]=values;
console.log(a,b,c);

//===========Object Destructuring============
const profile = {
    name:'codecrumbs',
    language:'javascript'
};
const {name,language} = profile;
console.log(name);
console.log(language);

//==========nested destructuring==============
const student ={name1:'code',scores:{
    maths:90,science:85}};
const {name1,scores:{maths},}=student;
console.log(name1);
console.log(maths);