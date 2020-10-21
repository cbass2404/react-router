import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./navigation/navigation";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/about";
import Blog from "./pages/blog";
import NoMatch from "./pages/noMatch";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <h1>React Router</h1>
          <Navigation />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-me" component={About} />
            <Route path="/contact-me" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
