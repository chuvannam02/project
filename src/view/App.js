import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Test from "../components/test";
import "./App.scss";
import MyComponent from "../components/myComponent";
function App() {
  return (
    <>
      <Router>
        <div className="nav_link">
          <nav>
            <ul>
              <li>
                <NavLink to="/about">Lazy Loading Hello World</NavLink>
              </li>
              <li>
                <NavLink to="/test">Test components</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/about">
            <MyComponent />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
