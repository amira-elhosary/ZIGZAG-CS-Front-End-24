//JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'

async function fetchDataFromApis(apis) {
  const promises = apis.map(async (api) => {
    const response = await fetch(api.url);
    const data = await response.json();
    return ({ api: api.name, data });
  });

  try {
    const results = await Promise.all(promises);
    const combinedResult = {};
    results.forEach((result_1) => {
      combinedResult[result_1.api] = result_1.data;
    });
    return combinedResult;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    return null;
  }
}

// Example :
const apis = [
  { name: 'API 1', url:  'https://jsonplaceholder.typicode.com/posts/1' },
  { name: 'API 2', url:  'https://jsonplaceholder.typicode.com/users/1' },
  { name: 'API 3', url: 'https://jsonplaceholder.typicode.com/todos/1' },
];

fetchDataFromApis(apis)
 .then((combinedResult) => {
    console.log(combinedResult);
  })
 .catch((error) => {
    console.error(`Error: ${error}`);
  });
