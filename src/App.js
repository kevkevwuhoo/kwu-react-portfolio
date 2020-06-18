import React from 'react';
import NavTabs from './components/NavTabs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavTabs />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/projects' component={Projects} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
