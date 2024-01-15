//create a new promise using the promise constructor
const mypromise = new Promise((resolve,reject)=>{
    //set a timeout of 1 second
    setTimeout(()=>{
        //generate a random number b/w 0 and 9
        const randomNum =Math.floor(Math.random()*10);
        //resolve the promise
        if(randomNum<5){
            resolve(`success! random number:${randomNum}`);
        }
        // reject the promise
        else{
            reject(`error!random number:${randomNum}`);
        }
    },1000);
    });
    //use hen .then() method to handle the resolved promise
    mypromise
    .then((result)=>{
        console.log(result);
    })
    //use the .catch()method to handle the rejected promise
    .catch((error)=>{
        console.log(error);
    })

