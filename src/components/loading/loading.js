import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./loading.css"; // Your custom styling

const Loading = () => {
  return (
    <div className="loading-container d-flex justify-content-center align-items-center flex-column">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="text-center mt-3">
        <span className="loadtext">This is an interactive portfolio</span>
        <br />
        <span className="loadtext">Try interacting with the components</span>
        <br />
        <span className="loadtext">Explore and Have fun!</span>
      </div>
    </div>
  );
};

export default Loading;
