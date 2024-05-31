import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Blog from './Components/Blog';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Project />
        <Skills />
        <Contact />
        <Blog />
      </main>
    </div>
  );
}

export default App;
