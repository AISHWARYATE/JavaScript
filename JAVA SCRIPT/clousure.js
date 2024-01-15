
//--------------clousure----------------
//a closure in javascript is a function that "rembers" its lexical scope even when it's executed
//outside that scope.in simpler terms,a closure allows a function to access variables from its
//outer(enclosing)function even after that outer function has finished executing.
function outerFunction(){
    const outerVariable = "i am from outer"
    function innerFunction(){
        console.log(outerVariable);//inner function can access outerVariable
    }
    return innerFunction;
}
const closure = outerFunction();//call outerFunction and store the returned innerFunction
closure();//output:"i am from outer"