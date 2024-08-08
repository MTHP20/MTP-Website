import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Skills from './Components/Skills';
import CV from './Components/CV';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Project />
        <Skills />
        <CV />
      </main>
      <Footer />
    </div>
  );
}

export default App;
