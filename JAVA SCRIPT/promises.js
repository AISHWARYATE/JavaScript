//A function that returns a promise to stimulate fetching data from a server
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = "fetched data from server";
            resolve(data);// resolve the promise with the data
        },2000); //stimulating 2 seconds delay
    });
}
// using the fetchedata promise
fetchData()
.then((data)=>{
    console.log(data); //output: "fetched data from server" after 2 seconds
})
.catch((error)=>{
    console.error(error);
});