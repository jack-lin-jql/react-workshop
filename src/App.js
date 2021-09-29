import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page3 } from "./components/Page3";

import "./App.css";

function App() {
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
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
        <Route path="/page3">
          <Page3 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
