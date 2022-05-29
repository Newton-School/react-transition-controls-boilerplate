import React from "react";
import { useRef, useEffect, useState } from "react";
import "../styles/App.css";

//Do not change the ID of any element.


const AnimationControls = () => {
  //Add on Change listeners to the input range fields, do not add any submit button.
  return (
    <form className="controls" id="animation-controls">
      <label htmlFor="anim-x">X: %</label>
      <input
        type="range"
        min="-100"
        max="100"
        className="slider"
        id="anim-x"
        name="anim-x"
      />
      <label htmlFor="anim-y">Y: % </label>
      <input
        type="range"
        min="-100"
        max="100"
        className="slider"
        id="anim-y"
        name="anim-y"
      />
      <label htmlFor="anim-scale">Scale: </label>
      <input
        type="range"
        min="0"
        max="2"
        step="0.1"
        className="slider"
        id="anim-scale"
        name="anim-scale"
      />
      <label htmlFor="anim-rotation">Rotate: </label>
      <input
        type="range"
        min="0"
        max="360"
        className="slider"
        id="anim-rotation"
      />
      <label htmlFor="anim-duration">Duration: </label>
      <input
        type="range"
        min="0"
        max="5"
        step="1"
        className="slider"
        id="anim-duration"
      />
    </form>
  );
};

const AnimationHandler = () => {
  //Add dynamic CSS to the div with "box" id here:

  return (
    <div className="animation-container">
      <div className="animation-div" id="box"></div>
    </div>
  );
};

const App = () => {
  // Animation Properties:
  //   x: 0,  for translate
  //   y: 0,  for translate
  //   scale: 1,
  //   rotation: 0,
  //   duration: 1, for transition

  return (
    <div id="main">
      <h1 className="title">Animate the Box</h1>
      <div className="animation-card">
        <AnimationControls />
        <AnimationHandler />
      </div>
    </div>
  );
};

export default App;
