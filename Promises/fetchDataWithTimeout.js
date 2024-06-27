//JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time

async function fetchWithTimeout(url, timeout = 4000) {
    const controller = new AbortController();
    
    // Set a timeout to abort the request after timeout
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, timeout);
  
    try {
        const response = await fetch(url, { signal: controller.signal });
        // Clear the timeout as the request has completed successfully
        clearTimeout(timeoutId);
        return await response.json();
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error(`Request timed out after ${timeout}ms`);
        } else {
            throw error;
        }
    }
  }

  //Example 
  fetchWithTimeout('https://jsonplaceholder.typicode.com/posts/1')
 .then((data) => console.log(data))
 .catch((error) => console.error(error));
  