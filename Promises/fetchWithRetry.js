//JavaScript function that fetches data from an API and retries the request a specified number of times if it fails

function fetchWithRetry(url, retries = 3, delay = 1000) {
    return new Promise((resolve, reject) => {
        const retry = (attempt = 1) => {
            fetch(url)
                .then(response => {
                    // Check if the response is successful (status code 200-299)
                    if (response.ok) {
                        resolve(response.json());
                    } else {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                })
                .catch(error => {  // Handle errors such as network issues or server errors
                    if (attempt <= retries) {
                        console.log(`Request failed. Retrying (${attempt}/${retries})...`);
                        setTimeout(() => retry(attempt + 1), delay);
                    } else {
                        reject(new Error(`Failed after ${retries} retries.'\nError: ${error.message}`));
                    }
                });
        };
        retry();
    });
}

// Example :
// const Url = 'https://jsonplaceholder.typicode.com/todos/1';
// Example with an error scenario :
const Url = 'https://jssonplaceholder.typicode.com/todos/1';
fetchWithRetry(Url, 3, 1000)
    .then(data => console.log('Data:', data))
    .catch(error => console.error('Error:', error.message));


