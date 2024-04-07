import React from "react";
import "./trail.css"; // Import the CSS for styling
import {useTrail, animated} from "react-spring";

const Trail = React.memo(({open, children}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: {mass: 5, tension: 2000, friction: 200},
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: {opacity: 0, x: 20, height: 0},
  });

  return (
    <div>
      {trail.map(({height, ...style}, index) => (
        <animated.div key={index} className="trailsText" style={style}>
          <animated.div style={{height}}>{items[index]}</animated.div>
        </animated.div>
      ))}
    </div>
  );
});

export default Trail;
