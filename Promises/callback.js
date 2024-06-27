//JavaScript function that takes a callback and invokes it after a delay of 2 seconds

function Callback(callback) {
    setTimeout(callback, 2000);
}

// Example :
Callback(() => {
    console.log("hello");
});


