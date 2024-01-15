// A  function that stimulates an asynchranous operation
function fetchData(callback){
    setTimeout(function(){
        const data = "Fetch data from server";
        callback(data);// call the calback function with the data
    },8000);// simulating a 2 second delay
}
//A callback function to handle the fetched data
function handleData(data){
    console.log(data);
}
//using the fetchData function with handleData callback
fetchData(handleData);