function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve("Login successful");
      } else {
        reject("Invalid credentials");
      }
    }, 2000);
  });
}

async function doLogin() {
  try {
    const res = await login("admin", "1234");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

doLogin();
