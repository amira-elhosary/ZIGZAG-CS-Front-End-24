// JavaScript program that converts a callback-based function to a Promise-based function

//callback-based function
function CallbackFunction(userId, callback) {
    setTimeout(() => {
      if (userId === 1) {
        const userData = { id: userId, name: `User ${userId}` };
        callback(null, userData);
      } else {
        const error = new Error(`User not found: ${userId}`);
        callback(error, null);
      }
    }, 2000);
  }
  
  //Promise-based function
  function PromiseFunction(userId) {
    return new Promise((resolve, reject) => {
        CallbackFunction(userId, (err, userData) => {
        if (err) {
          reject(err);
        } else {
          resolve(userData);
        }
      });
    });
  }
  
  // Example :
  PromiseFunction(1)
   .then((userData) => {
      console.log(userData);
    })
   .catch((err) => {
      console.error(err);
    });
  
  // Example with an error scenario :
  PromiseFunction(2)
   .then((userData) => {
      console.log(userData);
    })
   .catch((err) => {
      console.error(err); 
    });