import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";

function App(props) {

  const [colorSwitch, setColorSwitch] = useState(true)
  function handleClick() {
  setColorSwitch((prevColorSwitch) => {
    return prevColorSwitch === true ? false : true
    })
    console.log(colorSwitch)
  }

  return (
    <div className="container">
      <Navbar 
        colorSwitch={colorSwitch}
        toggledarkmode={handleClick}
      />
      <Main colorSwitch={colorSwitch} />
    </div>
  );
}

export default App;
