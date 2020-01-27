import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing, { Home } from "./Landing";
import NoMatch from "./NoMatch";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/Login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
