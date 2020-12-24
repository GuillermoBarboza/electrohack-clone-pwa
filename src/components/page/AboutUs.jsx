import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import logoMongo from "../../logoMongo.svg";
import logoExpress from "../../img/express.png";
import foto1 from "../../img/foto1.jpeg";
import foto2 from "../../img/foto2.jpeg";
import foto3 from "../../img/foto3.jpeg";
import axios from "axios";
import { getUser } from "../../redux/actions";
import globalUrl from "../../utils/url";

const AboutUs = () => {
  const dispatch = useDispatch();
  const [database, setDatabase] = useState("dbOnline");
  const [databaseClass, setDatabaseClass] = useState("");
  const [serverResponse, setServerResponse] = useState();

  useEffect(() => {
    // Installation prompt do later
    
    

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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container margin-aboutus">
      <div className="pt-3">
        <h2 className="page-header">About this project</h2>
        <hr className="mb-4" />
        <p>
          Thank you for checking out this page, this was a team effort made by 3
          participants as the final project of the Hack Academy's 2020 Coding
          Bootcamp.
        </p>
        <p>
          This page was made using the MERN stack, JWT for token validation,
          Bcrypt for password encryption, Mongoose as ORM, Bootstrap for
          styling, Redux for persistency, AWS S3 for image cloud saving, Vercel
          for back-end deploy, and Netlify for front-end deploy.
        </p>
        <p>
          We used the agile methodology, having daily meetings, testing the
          application and modifying our goals based on the data collected.
        </p>
      </div>

      <div className="technologies-wrapper">
        <ul className="d-flex lead technologies-icons list-unstyled justify-content-around">
          <li>
            <img src={logoMongo} alt="" />
          </li>
          <li>
            <img src={logoExpress} style={{ width: "6rem" }} alt="" />
          </li>
          <li>
            <i className="fab fa-2x fa-react mr-3"></i>
          </li>
          <li>
            <i className="fab fa-2x fa-node-js mr-1"></i>
          </li>
        </ul>
        <ul className="d-flex list-unstyled technologies-text justify-content-around">
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Node.js</li>
        </ul>
      </div>

      <div className="row mx-4 mt-4">
        <div className="col-md-6">
          <div className="p-md-5">
            <h5 className="mb-3">Use these credentials to try our page!</h5>
            <div className="ml-5">
              <p className="m-0">As a Customer</p>
              <p className="my-0 ml-3">Email: user@user.com</p>
              <p className="my-0 ml-3">Password: user</p>
              <p className="mt-2 mb-0">As an Admin, with full CRUD access!</p>
              <p className="m-0 ml-3">Email: admin@admin.com</p>
              <p className="m-0 ml-3">Password: admin</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <div className="text-center mt-4">
            <button
              onClick={refreshDB}
              className={`btn btn:block shadow-sm py-3 px-5 ${databaseClass}`}
            >
              {database === "dbOnline" && "Reset Database"}
              {database === "dbRefreshing" && "Resetting Database..."}
              {database === "dbRestored" && serverResponse}
            </button>
            <button
              className={`installBtn btn:block shadow-sm py-3 px-5 ${databaseClass}`}
            >
              Install our app!
            </button>
            <p id="log"></p>
          </div>
        </div>
      </div>

      <h3 className="page-header mt-5">Our Team</h3>
      <hr className="mb-5" />

      <div className="card-deck card-deck-custom">
        <div className="card border-0 text-center shadow">
          <img className="img-fluid" src={foto2} alt="Team" />
          <div className="card-body">
            <h4 className="card-title">Guillermo Barboza</h4>
            <p className="card-text">Developer</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  className="text-dark"
                  href="https://github.com/GuillermoBarboza"
                  target="_blank"
				  rel="noreferrer"
                >
                  <i className="fab fa-2x fa-github-square"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="text-dark"
                  href="https://www.linkedin.com/in/guillermo-barboza/"
                  target="_blank"
				  rel="noreferrer"
                >
                  <i className="fab fa-2x fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card border-0 text-center shadow">
          <img className="img-fluid" src={foto1} alt="Team" />
          <div className="card-body">
            <h4 className="card-title">Fernando Cuadro</h4>
            <p className="card-text">Developer</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  className="text-dark"
                  href="http://github.com/FernandoJavierCuadro"
                  target="_blank"
				  rel="noreferrer"
                >
                  <i className="fab fa-2x fa-github-square"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="text-dark"
                  href="http://linkedin.com/in/fernando-javier-cuadro"
                  target="_blank"
				  rel="noreferrer"
                >
                  <i className="fab fa-2x fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card border-0 text-center shadow">
          <img className="img-fluid" src={foto3} alt="Team" />
          <div className="card-body">
            <h4 className="card-title">María José Marra</h4>
            <p className="card-text">Developer</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  className="text-dark"
                  href="https://github.com/mjmarra"
                  target="_blank"
				  rel="noreferrer"
                >
                  <i className="fab fa-2x fa-github-square"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="text-dark"
                  href="https://www.linkedin.com/in/mariajosemarra/"
                  target="_blank"
				  rel="noreferrer"
                >
                  <i className="fab fa-2x fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
