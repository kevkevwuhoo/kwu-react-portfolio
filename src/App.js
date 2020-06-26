import React from 'react';
import NavTabs from './components/NavTabs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route path='/' component={Landing} />
        <NavTabs />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
