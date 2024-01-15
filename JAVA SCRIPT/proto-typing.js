//===========proto-typing===================
//prototyping is a mechanism that allows objects to inherit properties and methods from other objects.
//objects in javascript have a protype chain that defines their inheritence hierarchy.every object is
//linked to a protype object,and this chain continues until the base object,which has null as its prototype.


//========define a constructor function for a person
function Person(firstName,LastName){
    this.firstName = firstName;
    this.LastName = LastName;
}
 
//add a method to the person prototype
Person.prototype.getFullName =function (){
    return this.firstName + " " + this.LastName;
};

//create a new instance of person
const person1 = new Person("aiswarya","sree");
console.log(person1.getFullName());

//create another instance of person
const person2 = new Person("aiswarya","t");
console.log(person2.getFullName());