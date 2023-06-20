import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  let colorVar = {
    color: 'firebrick',
  }
  return (
  <div id="home">
    <h1 style={colorVar}>{name} is a Web Developer from {city}</h1>
  </div>
  )
}

export default Home;
