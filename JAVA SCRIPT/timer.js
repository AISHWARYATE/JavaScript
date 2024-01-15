//====================timer====================
//timers in javascript are used to schedule the excution f a function or a piece
//of code after a certain amount of time has passed.there are three main timer 
//functions available in javascript setTimeout, setinterval,and clearTimeout.
//===============setTimeout===================
//the setTimeout function is used to execute a function r code block after a specified delay(in milliseconds)
function delayedGreeting(){
    console.log("delayed greeting after 2 seconds");
}
setTimeout(delayedGreeting,2000);// execute delayedGreeting after 2 seconds

//=================setinternal and clear Timeout:
//the setinternal function repeatedly executes a function or code block at a specified interval

//the clearTimeout function is used to cancel a timeout that was previously set using setTimeout
let count = 0;
function incrementCounter(){
    console.log(`cunt:${count}`);
    count++;
}
const intervalid = setInterval(incrementCounter,1000);
//execute incrementCounter every 1 second
// stop the interval after 5 seconds
setTimeout(()=>{
    clearInterval(intervalid);
},5000);