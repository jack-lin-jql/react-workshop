
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";

import "./App.css";

const fetchCountries = async () => {
  const response = await fetch(
    // Don't ever commit any valuable access key into git!
    "http://api.countrylayer.com/v1/all?access_key=6b9e046f6758eb9c4e70a9608bce98ac"
  );

  if (!response.ok)
    throw new Error(`${response.status}: ${response.statusText}`);

  const responseInJSON = await response.json();
  return responseInJSON;
};

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    fetchCountries().then((resp) => {
      setCountries(resp);
    }).catch((error) => {
      console.log(error.toString());
      setCountries([]);
    });
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
          <Page1 countries={countries} />
        </Route>
        <Route path="/page2">
          <Page2 countries={countries} />
        </Route>
        <Route path="/page3">
          <Page3 countries={countries} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
