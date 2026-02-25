import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [currentLine, setCurrentLine] = useState(0);
  const lines = [
    "Hi",
    "I'm Rasmus",
    "a frontend developer",
    "passionate about creating",
    "I'm also",
    "a gamer",
    "a musician",
    "climber",
    "lover of film and TV",
    "sporadic audiobook listener",
    "want to check out my projects?",
    "or maybe even get in touch?",
    "I hope I'll hear from you",
    "hopefully this page won't crash",
    " ",
    "...",
    "are you still here?",
    "well",
    "enjoy, I guess",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentLine((prev) => (prev + 1) % lines.length); // Loop back to the start
    }, 3000); // Show each line for 1 second

    return () => clearTimeout(timeout); // Clear timeout on cleanup
  }, [currentLine, lines.length]);

  return (
    <div className="App">
      <header>
        <h1>Rasmus Frolov</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section id="about">
        <div className="about-lines">
          <p key={currentLine} className="about-line">{lines[currentLine]}</p>
        </div>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
              Project 1
            </a>
          </li>
        </ul>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <p>JavaScript, React, CSS, HTML, and more...</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: rasmus@example.com</p>
      </section>
    </div>
  );
}

export default App;