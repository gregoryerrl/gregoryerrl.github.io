import "./App.css";
import React from "react";
import {useState, useEffect} from "react";
import Overview from "./pages/overview/overview";
import Projects from "./pages/projects/projects";
import MoreDetails from "./pages/details/details";
import ContactMe from "./pages/contact/contact";
import Loading from "./components/loading/loading.js";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Adjust time as needed
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const getNavbarItemStyle = (pageIndex) => {
    return {
      color: activeIndex === pageIndex ? "white" : "rgb(125,125,125)",
      fontSize: activeIndex === pageIndex ? "130%" : "100%",
      transition: "color 0.3s ease-in-out, font-size 0.1s ease-in-out",
    };
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="App d-flex flex-column justify-content-center">
          <header className="nav-bar row py-3 mx-auto">
            <div
              className="tab col d-flex justify-content-center align-items-center border-end"
              onClick={() => setActiveIndex(0)}
              style={getNavbarItemStyle(0)}
            >
              <i className="bi bi-eyeglasses d-block d-md-none"></i>
              <span className="d-none d-md-block">Overview</span>
            </div>
            <div
              className="tab col d-flex justify-content-center align-items-center border-end"
              onClick={() => setActiveIndex(1)}
              style={getNavbarItemStyle(1)}
            >
              <i className="bi bi-briefcase d-block d-md-none"></i>
              <span className="d-none d-md-block">Projects</span>
            </div>
            <div
              className="tab col d-flex justify-content-center align-items-center border-end"
              onClick={() => setActiveIndex(2)}
              style={getNavbarItemStyle(2)}
            >
              <i className="bi bi-body-text d-block d-md-none"></i>
              <span className="d-none d-md-block">More Details</span>
            </div>
            <div
              className="tab col d-flex justify-content-center align-items-center"
              onClick={() => setActiveIndex(3)}
              style={getNavbarItemStyle(3)}
            >
              <i className="bi bi-envelope d-block d-md-none"></i>
              <span className="d-none d-md-block">Contact Me</span>
            </div>
          </header>
          {activeIndex === 0 && <Overview />}
          {activeIndex === 1 && <Projects />}
          {activeIndex === 2 && <MoreDetails />}
          {activeIndex === 3 && <ContactMe />}
        </div>
      )}
    </div>
  );
}

export default App;
