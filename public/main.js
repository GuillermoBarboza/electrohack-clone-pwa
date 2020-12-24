window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    console.log("navigator", navigator);
    console.log(navigator.serviceWorker);
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then((res) => {
        console.log(res.scope);
      })
      .catch((error) => {
        // registration failed
        console.log("Registration failed with " + error);
      });
  }
};

let deferredPrompt;
const installBtn = document.querySelector(".install");
installBtn.style.display = "none";

window.addEventListener("beforeinstallprompt", (e) => {
  console.log(e);

  e.preventDefault();

  deferredPrompt = e;

  installBtn.style.display = "block";

  installBtn.addEventListener("click", (e) => {
    installBtn.style.display = "none";
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });
});
