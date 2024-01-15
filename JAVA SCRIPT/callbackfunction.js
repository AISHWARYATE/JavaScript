function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}

function display(x,y,operation){
    var result = operation(x,y);
    console.log(result);
}
display(10,5,add);
display(10,5,subtract);
display(10,5,mul);
display(10,5,div);