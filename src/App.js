import React from "react";
import * as comp from "./components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as page from "./pages";

// 1515
// Click Handler to handle the toggle of showing facts
// onClick of button call the click handler
// Click handler should toggle state.factsVisible
// Only show the list if state.factsVisible ==true

//1. Create new header component
//2. Your Name top left - link
//3. links top right about, skills and contact
//4. Import your new header component in here

const App = () => {
  return (
    <Router>
      <comp.header />
      <main>
        <Switch>
          <Route path="/" exact component={page.Home} />
          <Route path="/skills" exact component={page.Skills} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;

// Add some more text to the span
// Button show facts above the list
// New section below the div 3 interesting facts about you in ul.
