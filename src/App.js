import React from "react";
import NavTabs from "./components/NavTabs";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavTabs />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
