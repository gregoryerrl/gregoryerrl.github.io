import React from "react";
import {useEffect, useRef, useState, useMemo} from "react";
import profilePic from "../../assets/greg.png";
import "./overview.css";
import {useSpring, animated, useTransition, useSpringRef} from "react-spring";
import {useGesture} from "react-use-gesture";
import Trail from "../../components/trail/trail";

const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20;

//PAGE START

const Overview = () => {
  const pages = useMemo(
    () => [
      ({style}) => (
        <animated.div
          style={{
            ...style,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--orange)",
          }}
        >
          <div>
            <span className="row text-center">Hello! My Name is</span>
            <span className="row text-center name">GREGORY ERRL</span>
          </div>
        </animated.div>
      ),
      ({style}) => (
        <animated.div
          style={{
            ...style,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--purple)",
            color: "var(--violet)",
          }}
        >
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <span className="header2">I like...</span>
            <span>Learning new things</span>
            <span>Coding</span>
            <span>Mapping things out</span>
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <span className="header2">In my freetime, I...</span>
            <span>Play videogames</span>
            <span>Watch Anime</span>
            <span>Make Electronics</span>
          </div>
        </animated.div>
      ),
      ({style}) => (
        <animated.div
          style={{
            ...style,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--violet)",
            color: "white",
          }}
        >
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <span className="header2">Main Skills</span>
            <div className="row w-100">
              <div className="col d-flex flex-column align-items-end">
                <span>Web Design</span>
                <span>Embedded Systems Engineering</span>
              </div>
              <div className="col d-flex flex-column align-items-start">
                <span>Full-Stack Web Development</span>
                <span>3D Prototype Design</span>
              </div>
            </div>
          </div>

          <div className="col d-flex flex-column justify-content-center align-items-center">
            <span className="header2">Other Skills/Hobbies</span>
            <div className="row w-100">
              <div className="col d-flex flex-column align-items-end">
                <span>Game Development</span>
                <span>Digital Arts / Pixel Arts</span>
              </div>
              <div className="col d-flex flex-column align-items-start">
                <span>Freewriting</span>
                <span>Singing :D</span>
              </div>
            </div>
          </div>
        </animated.div>
      ),
    ],
    []
  );

  useEffect(() => {
    const preventDefault = (event) => event.preventDefault();
    document.addEventListener("gesturestart", preventDefault);
    document.addEventListener("gesturechange", preventDefault);

    return () => {
      document.removeEventListener("gesturestart", preventDefault);
      document.removeEventListener("gesturechange", preventDefault);
    };
  }, []);

  const domTarget = useRef(null);
  const [{x, y, rotateX, rotateY, rotateZ, zoom, scale}, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: {mass: 5, tension: 350, friction: 40},
    })
  );

  useGesture(
    {
      onPinch: ({offset: [d, a]}) => api({zoom: d / 200, rotateZ: a}),
      onMove: ({xy: [px, py], dragging}) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.1,
        }),
      onHover: ({hovering}) =>
        !hovering && api({rotateX: 0, rotateY: 0, scale: 1}),
    },
    {domTarget, eventOptions: {passive: false}}
  );

  const [activeTrail, setActiveTrail] = useState(1);

  const handleClick = () => {
    setActiveTrail((prevTrail) => (prevTrail === 3 ? 1 : prevTrail + 1));
  };

  const [index, set] = useState(0);
  const onClick = () => set((state) => (state + 1) % 3);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: {opacity: 0, transform: "translate3d(100%,0,0)"},
    enter: {opacity: 1, transform: "translate3d(0%,0,0)"},
    leave: {opacity: 0, transform: "translate3d(-50%,0,0)"},
  });
  useEffect(() => {
    transRef.start();
  }, [index, transRef]);

  return (
    <div>
      <div className="d-none d-md-block  justify-content-center align-items-center overview">
        <div className="row hero w-100 mx-auto">
          <div className="col-md-4 d-flex justify-content-end align-items-center titles">
            <div className="w-100 line position-relative" onClick={handleClick}>
              <div className="position-absolute w-100">
                <Trail open={activeTrail === 1}>
                  <span>Computer Engineer</span>
                </Trail>
              </div>
              <div className="position-absolute w-100">
                <Trail open={activeTrail === 2}>
                  <span>Graduated Cum Laude with a GWA of 1.4</span>
                </Trail>
              </div>

              <div className="position-absolute w-100">
                <Trail open={activeTrail === 3}>
                  <span>Web Dev</span>
                  <span>Software Dev</span>
                  <span>Product Dev</span>
                </Trail>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center p-5 mid">
            <div className="container">
              <animated.div
                ref={domTarget}
                className="card m-5"
                style={{
                  transform: "perspective(600px)",
                  x,
                  y,
                  scale: scale.to((s) => s + zoom.get()),
                  rotateX,
                  rotateY,
                  rotateZ,
                }}
              >
                <img src={profilePic} alt="profile-pic" className="" />
              </animated.div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-start align-items-center titles">
            <div className="w-100 line position-relative" onClick={handleClick}>
              <div className="position-absolute w-100">
                <Trail open={activeTrail === 1}>
                  <span>HCIA</span>
                </Trail>
              </div>
              <div className="position-absolute w-100">
                <Trail open={activeTrail === 2}>
                  <span>Huawei Certified IT Associate</span>
                </Trail>
              </div>
              <div className="position-absolute w-100">
                <Trail open={activeTrail === 3}>
                  <span>Communicator</span>
                  <span>Problem Solver</span>
                  <span>Strategist</span>
                </Trail>
              </div>
            </div>
          </div>
        </div>
        <div className="row flex fill info" onClick={onClick}>
          {transitions((style, i) => {
            const Page = pages[i];
            return <Page style={style} />;
          })}
        </div>
      </div>
      <div className="d-block d-md-none col">
        <div className="mobilehero py-5">
          <img src={profilePic} alt="profile-pic" className="profile-pic" />
          <div className="mt-3 mobilename">Gregory Errl Babela</div>
          <div className="row mt-4 align-items-center">
            <span className="col border-end mobiletitles">
              Huawei Certified IT Associate
            </span>
            <span className="col mobiletitles">Computer Engineer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
