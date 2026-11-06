// What is the difference between  Promises and async/await ?
// Promises and async/await are both ways to handle asynchronous operations in JavaScript.
// Promises provide a way to handle asynchronous operations using .then() and .catch() methods.
// A Promise represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises can be chained together to handle multiple asynchronous operations in a more readable way than using callbacks.
// It has three states:
// 1. Pending
// 2. Fulfilled
// 3. Rejected
// const getUser = ()=>{
//     return fetch('https://jsonplaceholder.typicode.com/users/1').
//                    then(response => response.json())
//                    .then (data => console.log(data))
//                    .catch
//}



// async/await is a more recent addition to JavaScript that allows you to write asynchronous code that looks and behaves like synchronous code. It is built on top of Promises and provides a more concise and readable syntax for handling asynchronous operations.
// The async keyword is used to declare a function as asynchronous, and the await keyword is used to pause the execution of the function until a Promise is resolved or rejected. This allows you to write asynchronous code in a more linear and sequential manner, making it easier to read and understand.
// async/await is syntactic sugar built on top of Promises, making the code look more like synchronous code.



async function getUser() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        console.log(data);
    }catch(error){  
         console.error('Error:', error);


    }}

    getUser();

//     Promises                              Async/Await
// Introduced in ES6 (2015)                  Introduced in ES2017 (ES8)
// Uses .then() and .catch() methods         Uses async and await keywords
// can create chained promises/              Looks more like synchronous code
// callbacks
// Useful for chaining                       Often easier to read 
// Error handling with .catch()              Error handling with try-catch


//Async / Await is built on top of Promises. It provides  clearer syntax for handling asynchronous operations. Internally , an async function always returns a Promise 
// and await pause the execution of that async function until Promise settles, without blocking the JS thread.

