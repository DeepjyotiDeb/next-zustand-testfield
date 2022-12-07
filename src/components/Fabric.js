import React, { useEffect, useRef, useState } from "react";

const Fabric = () => {
  const boxRef = useRef();

  const [x, setX] = useState();
  const [y, setY] = useState();

  const getPosition = () => {
    const x = boxRef.current.offsetLeft;
    setX(x);

    const y = boxRef.current.offsetTop;
    setY(y);
  };

  useEffect(() => {
    getPosition();
  }, []);

  // Re-calculate X and Y of the red box when the window is resized by the user
  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);

  return (
    <div>
      <div className="box" ref={boxRef}>
        <h1>Position: </h1>
        <h2>X: {x ?? "No result"}</h2>
        <h2>Y: {y ?? "No result"}</h2>
      </div>
    </div>
  );
};

export default Fabric;
