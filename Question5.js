// How do you handle errors in asynchronous code?

// There are different approaches whether we use Promise or async/await
// Method-1  try-catch with async/await
async function fetchData(){
    try{
        const response = await fetch("/api/data");
        if(!response.ok){
            throw new Error("API request failed")
        }
        const data = await response.json();
        return data;
    }
    catch(error){
        console.error("Error:", error.message);
    }
}

//Promise.catch()

fetch("/api/data")
   .then(response =>{
   if(!response.ok) throw new Error("Req failed");
   
   return response.json()})
   .then(data=> console.log(data))
   .catch(error => console.log(error))


   // Handle errors in Multiple API calls

   async function getData(){
    const results = await Promise.allSettled([
        fetch("/api/users"),
        fetch("/api/products"),
        fetch("/api/orders")
    ])
    results.forEach(result =>{
        if(result.status === "fulfilled")console.log(result.value);
        else console.log(result.reason);
    })
   }

   // fetch() does not automatically reject when the server resturns HTTP errors such as 404 or 500. We should check response.ok
 
