function showMessage(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

showMessage(() => {
  console.log("Hello after 2 seconds");
});
