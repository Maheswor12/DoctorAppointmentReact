import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing, { Home } from "./Landing";
import NoMatch from "./NoMatch";
import Login from "./Login";
import Register from "./Register";
import HomePage from "./HomePage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/Home" component={HomePage} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
