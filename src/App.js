import { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import "./App.css";

const fetchCountries = async () => {
  const response = await fetch(
    // Don't ever commit any valuable access key into git!
    "http://api.countrylayer.com/v2/all?access_key=YOUR_ACCESS_KEY_HERE"
  );
  const responseInJSON = await response.json();
  return responseInJSON;
};

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    fetchCountries().then((resp) => setCountries(resp));
  },
  // Dependency list, if empty, runs the callback function once
  []);

  return (
    <Router>
      <div>
        <nav>
          <li>
            <Link to="/page1">Page1</Link>
          </li>
          <li>
            <Link to="/page2">Page2</Link>
          </li>
          <li>
            <Link to="/page3">Page3</Link>
          </li>
        </nav>
      </div>

      {/* Handles matching URL path to specific components */}
      {/* Switch ensures to render a route exclusively from the first
      matching path, like a switch case statement */}
      <Switch>
        <Route path="/page1">
          Page 1
          {/* <Page1 /> */}
        </Route>
        <Route path="/page2">
          Page 2
          {/* <Page2 /> */}
        </Route>
        <Route path="/page3">
          Page 3
          {/* <Page3 /> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
