window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then((res) => {
        console.log(res)
        console.log(res.scope);
      })
      .catch((error) => {
        // registration failed
        console.log("Registration failed with " + error);
      });
  }

};

