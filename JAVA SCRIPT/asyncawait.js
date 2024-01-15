//==================ASYNC-AWAIT================
//async/await is a modern javascript feacture that provides a cleaner and more concise way to work
//with asynchronous code compared to using callbacks or promises directly.it makes asynchronous code 
//look more like synchronous code,improving readability and maintainability.

//a functon that simulates fetching data from a server asynchranously
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
          const data = "Fetched data from server after 2 seconds";
          resolve(data)  
        },2000);//simulating a 2 second daily
    });
}
//an async function using asnc/await to handle the asynchranous operatiion
async function fetchDataAsync(){
  try {
    const data =await fetchData();//wait for the promise to resolve
    console.log(data);//output:"fetcheed data from server after 2 seconds"
  } catch (error) {
    console.error(error);
  }
}
// using the async function
fetchDataAsync();