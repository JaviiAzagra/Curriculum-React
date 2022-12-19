import React from "react";
import "./App.scss";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Buttons from "./components/Buttons/Buttons";
import Habilities from "./components/Habilities/Habilities";
import CV from "./CV/CV";
import Line from "./components/Line/Line";

const { hero, habilities} = CV;

function App() {
  return (
    <div className="App">
      <Hero hero={hero} />
      <About metadata={hero.aboutMe} />
      <Habilities habilities={habilities}/>
      <Buttons/>
      <Contact/>    
    </div>
  );
};

export default App;
