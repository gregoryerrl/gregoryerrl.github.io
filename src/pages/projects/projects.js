import React from "react";
import "./projects.css";
import eucanna from "../../assets/eucanna.png";
import lifeguide from "../../assets/lifeguide.png";
import gethired from "../../assets/gethired.png";
import ladyliberty from "../../assets/ladyliberty.png";
import signlanguage from "../../assets/signlanguage.jpg";
import co2 from "../../assets/co2.jpg";

const Projects = () => {
  return (
    <div className="projects mt-4 d-flex p-3">
      {/* Web Projects */}
      <div className="col-md-6 webprojects p-5 rounded">
        <h1 class="mb-5">Web Projects</h1>
        {/* Repeat this structure for each web project */}
        <div className="row mt-3 mb-3 p-5 border-bottom">
          {/* Thumbnail */}
          <div className="col-md-4">
            <img
              src={eucanna}
              alt="EuCannaJobs Thumbnail"
              className="img-fluid"
            />
          </div>
          {/* Project Name and Details */}
          <div className="col-md-8">
            <h3>EuCannaJobs</h3>
            <p>Details about the project...</p>
          </div>
        </div>
        <div className="row mb-3 p-5 border-bottom">
          {/* Thumbnail */}
          <div className="col-md-4">
            <img
              src={lifeguide}
              alt="EuCannaJobs Thumbnail"
              className="img-fluid"
            />
          </div>
          {/* Project Name and Details */}
          <div className="col-md-8">
            <h3>LifeGuide</h3>
            <p>Details about the project...</p>
          </div>
        </div>
        <div className="row mb-3 p-5 border-bottom">
          {/* Thumbnail */}
          <div className="col-md-4">
            <img
              src={gethired}
              alt="EuCannaJobs Thumbnail"
              className="img-fluid"
            />
          </div>
          {/* Project Name and Details */}
          <div className="col-md-8">
            <h3>GetHired</h3>
            <p>Details about the project...</p>
          </div>
        </div>
      </div>

      {/* Product Prototypes */}
      <div className="col-md-6 prototypes p-5">
        <h1 class="mb-5">Product Prototypes</h1>
        <div className="row mt-2 mb-3 p-5 border-bottom ">
          {/* Thumbnail */}
          <div className="col-md-4">
            <img
              src={ladyliberty}
              alt="Prototype Thumbnail"
              className="img-fluid"
            />
          </div>
          {/* Project Name and Details */}
          <div className="col-md-8">
            <h3>Lady Liberty</h3>
            <p>Details about the prototype...</p>
          </div>
        </div>
        <div className="row mb-3 p-5 border-bottom ">
          {/* Thumbnail */}
          <div className="col-md-4">
            <img
              src={signlanguage}
              alt="Prototype Thumbnail"
              className="img-fluid"
            />
          </div>
          {/* Project Name and Details */}
          <div className="col-md-8">
            <h3>Sign Language Wristband</h3>
            <p>Details about the prototype...</p>
          </div>
        </div>
        <div className="row mb-3 p-5 border-bottom">
          {/* Thumbnail */}
          <div className="col-md-4">
            <img src={co2} alt="EuCannaJobs Thumbnail" className="img-fluid" />
          </div>
          {/* Project Name and Details */}
          <div className="col-md-8">
            <h3>Co2 Capture & Sense</h3>
            <p>Details about the project...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
