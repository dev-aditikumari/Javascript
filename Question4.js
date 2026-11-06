//What are Promise.all() , Promise.allSettled() , Promise.race() and Promise.any()


// These are promises static methods used to handle multiple asynchronous operations.

//Promise.all():
// Executes multiple Promises concurrently
//Resolves when all promises are fulfilled
//Rejects immediately when any Promise rejects.

const p1 = Promise.resolve("User");
const p2 = Promise.resolve("Orders");
const p3 = Promise.resolve("Products");

Promise.all([p1,p2,p3])
    .then(result => console.log("result"))
    .catch(error => console.log("error"))

// if one Promise rejects,the entire Promise.all rejects
// Use cases: Fetch user , order and products together when all three results are required


// Promise.allSettled()
//Waits for all Promises to settle, whether fulfilled or rejected.

const p4 = Promise.resolve("Success");
const p5 = Promise.reject("Failed");

Promise.allSettled([p4 ,p5])
     .then(result=>console.log(result));

// Use Case :- When we want results from all the API calls, even if some APIs fails

//Promise.race()

// Returns the result of the first Promise that settles , whether fulfilled or rejected

const p6 = new Promise(resolve=>setTimeout(()=>resolve("First"),1000));
const p7 = new Promise(resolve =>setTimeout(()=> resolve("Second"),2000));

Promise.race([p6,p7])
    .then(result => console.log(result));

// Use case : Implementing request timeouts or selecting the fastest Response

// Promise.race() doesnot automatically cancel the slower response.

//Promise.any() :- Returns the first successfully fulfiled Promise
//It ignores rejected Promises unless all of ther reject.

const p8 = Promise.reject("Error");
const p9 = Promise.resolve("Success");
const p10 = Promise.resolve("Success1");

Promise.any([p8 , p9 , p10])
      .then(result => console.log(result))

// If all promise reject, it throws an AggregatedError


// Method              Resolve when      Rejection Behaviour
// Promise.all()       All fulfil        First rejection rejects
// Promise.allSettled()All Settle        Never rejects due to an input rejection
// Promise.race()      First Settle      First rejection also rejects
// Promise.any()       First fulfills    Rejects only if all reject




