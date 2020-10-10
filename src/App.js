import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavTabs from './components/NavTabs';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <div className='App'>
        <Route path='/' component={Landing} />
        <NavTabs />
        <About />
        <Skills />
        <Projects />
      </div>
    </BrowserRouter>
  );
}

export default App;
