async function myDisplay(){
    let myPromise = new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("here after 2 seconds");
        },2000)
    });
    const result = await myPromise;
    console.log(result);
}
myDisplay();
console.log("hello");
console.log("hello");
console.log("hello");