import React from "react";
import "./App.scss";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Buttons from "./components/Buttons/Buttons";
import CV from "./CV/CV";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

const { hero } = CV;

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero hero={hero} />
      <About metadata={hero.aboutMe} />

      <Projects projects={CV.projects}/>
      <Buttons/>
      <Contact/>    
    </div>
  );
};

export default App;
