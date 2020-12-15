import React, { useState, useEffect } from "react";

const Mousemove = () => {
  const [mouseX, setMouseX] = useState("0");
  const [mouseY, setMouseY] = useState("0");

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return ()=> {
        console.log("componetn did unmo");
        document.removeEventListener("mousemove", handleMouseMove)
    }
  }, []);

  function handleMouseMove(e) {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  }

  return (
    <div className="App">
      <h1> Use Effect Intro</h1>
      <p> Mouse X Position: {mouseX}</p>
      <p> Mouse Y Position: {mouseY}</p>
    </div>
  );
};

export default Mousemove;
