import React, { useEffect } from "react";
import logoMongo from "../../logoMongo.svg";
import foto1 from "../../img/foto1.jpeg";
import foto2 from "../../img/foto2.jpeg";
import foto3 from "../../img/foto3.jpeg";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container margin-aboutus">
      <div className="pt-3">
        <h2 className="page-header">About this page</h2>
        <hr className="mb-4" />
        <p>
          Thank you for checking out this page, this was a team effort made by 3
          participants as the final project of the Hack Academy's 2020 Coding
          Bootcamp.
        </p>
        <p>
          This page was made using the MERN stack, JWT for token validation,
          bcrypt for password encryption, mongoose as ORM, Bootstrap for
          styling, Redux for persistency, aws S3 for image cloud saving, vercel
          for back-end deploy, and netlify for front-end deploy.
        </p>
        <p>
          We used the agile methodology, having daily meetings, testing the
          application and modifying our goals based on the data collected.
        </p>
      </div>

      <div className="technologies-wrapper">
        <ul className="d-flex lead list-unstyled justify-content-around">
          <li>
            <img src={logoMongo} alt="" />
          </li>
          <li>
            <i class="fab fa-2x fa-react"></i>
          </li>
          <li>
            <i class="fab fa-2x fa-node-js"></i>
          </li>
        </ul>
        <ul className="d-flex lead list-unstyled justify-content-around">
          <li>MongoDB</li>
          <li>React.js</li>
          <li>Node.js</li>
        </ul>
      </div>

      <h3 className="page-header mt-5">Our Team</h3>
      <hr className="mb-5" />

      <div className="card-deck card-deck-custom">
        <div className="card border-0 text-center shadow-about-us">
          <img className="img-fluid" src={foto2} alt="Team" />
          <div className="card-body">
            <h4 className="card-title">Guillermo Barboza</h4>
            <p className="card-text">Developer</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <i className="fab fa-2x fa-github-square"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-2x fa-linkedin"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="card border-0 text-center shadow-about-us">
          <img className="img-fluid" src={foto1} alt="Team" />
          <div className="card-body">
            <h4 className="card-title">Fernando Cuadro</h4>
            <p className="card-text">Developer</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <i className="fab fa-2x fa-github-square"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-2x fa-linkedin"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="card border-0 text-center shadow-about-us">
          <img className="img-fluid" src={foto3} alt="Team" />
          <div className="card-body">
            <h4 className="card-title">María José Marra</h4>
            <p className="card-text">Developer</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <i className="fab fa-2x fa-github-square"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-2x fa-linkedin"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
