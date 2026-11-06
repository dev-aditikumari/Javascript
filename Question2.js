// What are the Call Stack , Microtask Queue and Task Queue in Javascript?
// Call Stack                     Microtask Queue          Task Queue
// Executes synchronous code      Handles microtasks       Handles tasks (macrotasks)
// Immediate execution            Higher priority than     Lower priority than
//                                task queue               microtask queue
// Follows LIFO (Last In First    Executes after the       Executes after all
// Out) order                     current execution        microtasks have been
//                                context is completed     executed
// Function calls                 Promises                 setTimeout
// currently executing            Higher priority than     Lower priority than microtask queue
//                                tasks  

console.log("Start");
setTimeout(() => {
  console.log("setTimeout");
}, 0);
Promise.resolve().then(() => {
  console.log("Promise");
});
console.log("End");

// ->OuTPUT : START , END , PROMISE , SETTIMEOUT

//Synchronous code is executed first, then microtasks are executed, and finally tasks are executed. This is the order of execution in the JavaScript Event Loop.