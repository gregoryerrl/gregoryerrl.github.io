import React from "react";
import "./details.css"; // Your custom CSS file

const Details = () => {
  return (
    <div className="container details-container my-5">
      <section className="experience mb-5">
        <h2 className="mb-3">Experience</h2>
        <div className="card mb-3">
          <div className="card-body">
            <h3 className="card-title">Freelancer</h3>
            <p className="card-text">2023 - Present</p>
            <ul>
              <li>Web Developer - Fullstack</li>
              <li>Web Design</li>
              <li>Product Engineer</li>
              <li>Embedded Systems</li>
            </ul>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h3 className="card-title">Intern Fullstack Dev</h3>
            <p className="card-text">Jun-Dec 2022</p>
            <ul>
              <li>Fullstack - MEAN</li>
              <li>MongoDB</li>
              <li>ExpressJS</li>
              <li>AngularJS</li>
              <li>NodeJS</li>
            </ul>
          </div>
        </div>
        {/* Repeat for more experiences */}
      </section>

      <section className="education">
        <h2 className="mb-3">Education</h2>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">
              Bachelors in Computer Engineering - STI OrCa
            </h3>
            <p className="card-text">2023 - CUM LAUDE</p>
            {/* Additional details */}
          </div>
        </div>
        {/* Repeat for more education entries */}
      </section>
    </div>
  );
};

export default Details;
