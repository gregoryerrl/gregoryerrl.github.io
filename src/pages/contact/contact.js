import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="d-flex justify-content-center vh-100">
      <div class="bg mt-5 mb-5">
        <h2 className="text-center mb-5 py-3">Contacts / Social Media</h2>
        <div className="mb-3 mt-5 all">
          <i className="bi bi-github" /> <a>gregoryerrl</a>
        </div>
        <div className="mb-3 all">
          <i className="bi bi-facebook" /> <a>gregoryerrl</a>
        </div>
        <div className="mb-3 all">
          <i className="bi bi-telephone-fill" /> <a>+639297894257</a>
        </div>
        <div className="mb-3 all">
          <i className="bi bi-envelope-fill" /> <a>gregoryerrl@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
