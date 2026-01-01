function getData() {
  return Promise.resolve("Data received");
}

async function fetchData() {
  const result = await getData();
  console.log(result);
}

fetchData();
