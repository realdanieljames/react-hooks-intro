import React, { useState, useEffect } from "react";
import './App.css';
import Mousemove from "./Mousemove"


function App() {
const [toggle,  setToggle] =  useState(true)


return (
    <>
    <div style={{ textAlign: "center"}}>
        <button onClick={()=> setToggle((prevState)=> 
        setToggle(!prevState))}>
        Toggle
        </button>
    </div>

    {toggle
    ? ( <Mousemove />) 
    :(<p style={{ textAlign : "center"}}>
        " you cannot see the mousemove componetn"
        </p>
        )
    }
    </>
    );

}

export default App;