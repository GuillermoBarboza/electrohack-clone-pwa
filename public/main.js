window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then((res) => {
        console.log(res.scope);
        console.log('so far so good')
      })
      .catch((error) => {
        // registration failed
        console.log("Registration failed with " + error);
      });
  }
  
  window.addEventListener("beforeinstallprompt", function (e) {
    console.log(document.querySelector('.installBtn'));
    
    

    
  });
};
