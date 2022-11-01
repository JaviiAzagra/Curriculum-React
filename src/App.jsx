import { useState } from "react";
import './App.css';
import  Hero  from "./components/Hero/Hero";
import  About  from "./components/About/About";
import  Education  from "./components/Education/Education";
import  Experience  from "./components/Experience/Experience";
/* import  More  from "./components/More/More"; */
import  CV  from "./CV/CV";


const { hero, education, experience/* , languages, habilities, volunteer */ } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <Hero hero = {hero} />
      <About metadata={hero.aboutMe} />
      <div className="botones">
      <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
      </div>
            <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
    </div>
  );
}

export default App;
