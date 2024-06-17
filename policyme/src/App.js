import { useState } from 'react';
import './App.css';
import Attribute from './Attribute.js';
import ClassMatching from './ClassMatching.js';
import Skills from './Skills.js';

/**
 * Main Component managing:
 * @params userAttribute - points for each CLASS LIST
 */
function App() {
  const [userAttribute, setUserAttribute] = useState([]);
  const [userModifier, setUserModifier] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <Attribute exportAttributes={setUserAttribute} exportModifier={setUserModifier} />
        <ClassMatching userAttribute={userAttribute} />
        <Skills userModifier={userModifier} />
      </section>
    </div>
  );
}

export default App;
