function fakeAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Vijay", role: "User" });
    }, 2000);
  });
}

fakeAPI().then(data => console.log(data));
