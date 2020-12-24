import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getUser, showModal } from "../redux/actions";
import globalUrl from "../utils/url";

const HomeModal = () => {
  const dispatch = useDispatch();
  const [database, setDatabase] = useState("dbOnline");
  const [databaseClass, setDatabaseClass] = useState("");
  const [serverResponse, setServerResponse] = useState();

  useEffect(() => {
    // Installation
    let deferredPrompt;

    window.addEventListener("beforeinstallprompt", function (e) {
      e.preventDefault();
      deferredPrompt = e;
    });
    let installBtn = document.querySelector(".installBtn");
    installBtn.addEventListener("click", (e) => {
      installBtn.style.display = "none";
      // Show the prompt
      document.getElementById("log").innerHTML = `${installBtn}, ${deferredPrompt}`;
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          document.querySelector(".installBtn").innerHTML = "accepted";
        } else {
          document.querySelector(".installBtn").innerHTML = "what";
        }
        deferredPrompt = null;
      });
    });

    if (database === "dbOnline") {
      window.scrollTo(0, 0);
    }
    switch (database) {
      case "dbOnline":
        return setDatabaseClass("alert-danger");
      case "dbRefreshing":
        return setDatabaseClass("alert-primary");
      case "dbRestored":
        return setDatabaseClass("alert-success");
      default:
        return setDatabaseClass("");
    }
  }, [database]);

  function refreshDB() {
    setDatabase("dbRefreshing");
    dispatch(getUser({}));
    axios({
      method: "GET",
      url: `${globalUrl}/api/v1/seed`,
    })
      .then((response) => {
        setDatabase("dbRestored");
        setServerResponse(response.data);
        dispatch(showModal(false));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="modal-color rounded">
      <div className="text-center">
        <h4 className="p-md-3">Welcome!</h4>
        <button className={`installBtn btn:block shadow-sm py-3 px-5 ${databaseClass}`}>
          Install our app!
        </button>
        <p id="log"></p>
        <p>For more info please go to the "about" page</p>
        <hr />
      </div>

      <div className="row mx-4">
        <div className="col-md-6">
          <div className="p-md-5">
            <h5 className="mb-3">Use these credentials to try our page!</h5>
            <div className="ml-3">
              <p className="m-0">As a Customer</p>
              <p className="my-0 ml-3">Email: user@user.com</p>
              <p className="my-0 ml-3">Password: user</p>
              <p className="mt-2 mb-0">As an Admin, with full CRUD access!</p>
              <p className="m-0 ml-3">Email: admin@admin.com</p>
              <p className="m-0 ml-3">Password: admin</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-md-5">
            <h5 className="mb-3">Press this button to begin!</h5>
            <div className="text-center mt-4">
              <button
                onClick={refreshDB}
                className={`btn btn:block shadow-sm py-3 px-5 ${databaseClass}`}
              >
                {database === "dbOnline" && "Reset Database"}
                {database === "dbRefreshing" && "Resetting Database..."}
                {database === "dbRestored" && serverResponse}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeModal;
