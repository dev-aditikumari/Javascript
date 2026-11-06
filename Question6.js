// What is Event Bubbling , Capturing and Delegation

// This concepts explain how DOM events propogate through HTML elements


// Event bubbling 
// When we click the child  button , the event propagated from the child element toward its parent elements.

// Direction :- document-> div(parent)-> button(child)-clicked

//Bubbling trabels from child to parent(bottom to to)


document.querySelector("#parent")
    .addEventListener("click", () => {
        console.log("Parent clicked");
    });
 
document.querySelector("#child")
    .addEventListener("click", () => {
        console.log("Child clicked");
    });
 
    // output->  Child 
    //           Parent

    // Event Capturing 
    // Capturing works in the opposite direction

    // The event travels from the outermost ancestor towards the target element
    parent.addEventListener("click",()=>{
        console.log("Parent")
    },true)
    parent.addEventListener("click",()=>{
        console.log("Parent")
    },true)
    //Output :- Parent Child
    // The third argument true enables capturing


    // Event Delegation
    // Event delegation means attaching a single eventlistener to a parent element instead of attaching
    //seperate listeners to every child

    // <ul id="items">
    //     <li>Apple</li>
    //     <li>Banana</li>
    //     <li>Mango</li>
    // </ul>


    
