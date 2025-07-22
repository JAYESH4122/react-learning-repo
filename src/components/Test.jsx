import React, { useEffect, useState } from "react";

const Test = () => {
  const [ x, setX ] = useState(0);
  const [ y, setY ] = useState(0);

  const logMousePosition = e => {
    console.log('logMouse function Mouse event')
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(
    () => {
      console.log("useeffect called");
      window.addEventListener( 'mousemove', logMousePosition);
    }, []
  )


  return (
    <div>
      <h1> X: {x} Y: {y}</h1>
    </div>
  );
};

export default Test;
