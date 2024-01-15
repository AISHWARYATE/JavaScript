//OJECT...
let person = {
    name :"john",
    age :28,
    grades : ['A','B','C'],
    greet : function(){
        console.log("name---",this.name);
    }
};
console.log("name",person.name);
console.log("name",person.grades[1]);
person.greet();//calling the function...