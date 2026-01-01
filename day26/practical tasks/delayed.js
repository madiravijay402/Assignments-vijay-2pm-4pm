function notify(msg, delay) {
  setTimeout(() => {
    console.log("Notification:", msg);
  }, delay);
}

notify("Task completed", 3000);
