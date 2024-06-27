 //JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises

async function downloadUrls(urls) {
    // Map the array of URLs to an array of Promises
    const fetchPromises = urls.map(url => fetch(url).then(response => {
      if (response.ok) {
        return response.text(); 
    }
    throw new Error(`HTTP error! Status: ${response.status}`);
    }));
  
    try {
      // Wait for all Promises to resolve
      const contents = await Promise.all(fetchPromises);
      return contents;
    } catch (error) {
      console.error('Error downloading URLs:', error);
      throw error;
    }
  }
  
  // example:
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];
  
  downloadUrls(urls)
    .then(contents => {
      contents.forEach((content, index) => {
        console.log(`Content from URL ${index + 1}:`, content);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
  