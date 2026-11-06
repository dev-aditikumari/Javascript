// How does the javascript Eventloop work in JavaScript?

// The JavaScript Event Loop is a fundamental concept that allows JavaScript to perform non-blocking operations, despite being single-threaded. It enables asynchronous programming by managing the execution of code, handling events, and executing queued tasks.

// Here's a breakdown of how the Event Loop works: 
// 1. **Call Stack**: JavaScript has a call stack, which is a data structure that keeps track of function calls. When a function is invoked, it is added to the top of the stack. When the function completes, it is removed from the stack.
// 2. **Web APIs**: When asynchronous operations (like setTimeout, fetch, or DOM events) are called, they are handled by the browser's Web APIs. These operations are offloaded to the browser, allowing the main thread to continue executing other code.
// 3. **Callback Queue**: Once an asynchronous operation is completed, its callback function is placed in the callback queue (also known as the task queue). This queue holds all the functions that are ready to be executed after the current execution context is finished.
// 4. **Event Loop**: The Event Loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack for execution. This process repeats, allowing JavaScript to handle multiple asynchronous operations without blocking the main thread.

// JavaScript is a single-threaded language, which means it executes one piece of JS code at a time using the Call Stack.

// But javascript  also handles asynchronous operations using the Event Loop, which allows it to perform tasks like I/O operations, timers, and network requests without blocking the main thread. This is achieved through the use of Web APIs and the callback queue, enabling JavaScript to manage multiple tasks efficiently.
// these operations are handled in the background, and their callbacks are executed when the main thread is free, ensuring a smooth and responsive user experience.
// these operations are :-
// setTimeout, setInterval, fetch API, XMLHttpRequest, and event listeners , promises, DOM events, and async/await are some of the common asynchronous operations in JavaScript.

// Four main components of Event Loop are:-
// // 1. Call Stack
// Executes synchronous javascript code. Follows LIFO . A function is pushed onto the stack when alled and ppped when completed

// //2.Web APIs
// Handles asynchronous operations outside the JavaScript engine, such as setTimeout, fetch, and DOM events.
// The Browser provides these APIs, allowing JavaScript to offload tasks  and handle them asynchronously outside the javascript execution stack, ensuring the main thread can continue executing other code without blocking.
// eg: setTimeout(),  fetch(), DOM events.

//3. Microstack queue
// The microtask queue is a queue that holds microtasks, which are tasks that need to be executed after the current execution context but before the next event loop iteration. Microtasks include promises and process.nextTick() in Node.js. They have a higher priority than tasks in the callback queue, meaning they will be executed before any tasks in the callback queue.
// It stores high-priority asynchronous callbacks .
// Promise.then() , .catch() , .finally() , queueMicrotask() are some of the common microtasks in JavaScript.

//4. Task Queue (Callback Queue /Macrotask Queue)
// The task queue, also known as the callback queue or macrotask queue, is a queue that holds tasks that are ready to be executed after the current execution context and all microtasks have been completed. Tasks in the task queue include setTimeout, setInterval, and I/O operations. They have a lower priority than microtasks, meaning they will be executed after all microtasks have been processed.

// How does the event loop execute code?
// The general execution flow of the event loop can be summarized as follows:
// 1. The event loop checks if the call stack is empty.
// 2. If the call stack is empty, it checks the microtask queue for any pending microtasks.
// 3. If there are microtasks in the microtask queue, it executes them one by one until the queue is empty.
// 4. After all microtasks have been executed, the event loop checks the task queue for any pending tasks.
// 5. If there are tasks in the task queue, it takes the first task and pushes it onto the call stack for execution.
// 6. The process repeats, allowing JavaScript to handle multiple asynchronous operations efficiently without blocking the main thread.

// -> Executes synchronous code first 
// Once the call stack is empty executes all micrstacks if available. The browser may perform rendering. Executes the next task.Repeat the process
// Microstacks have higher priority than tasks in the task queue, so they are executed before any tasks in the task queue. This ensures that promises and other microtasks are handled promptly, providing a responsive user experience.


console.log("Start");
setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
}); 
console.log("End");

// -> OUTPUT : START , END , PROMISE , SETTIMEOUT