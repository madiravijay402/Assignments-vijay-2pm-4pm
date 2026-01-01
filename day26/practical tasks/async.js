function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data loaded"), 2000);
  });
}

async function loadData() {
  console.log("Loading...");
  const result = await getData();
  console.log(result);
}

loadData();
