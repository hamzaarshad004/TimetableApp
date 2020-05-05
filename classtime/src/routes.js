import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserTimeTable from "./components/UserSite/UserTimeTable";
import AboutUs from "./components/UserSite/AboutUs";
import SignIn from "./components/Core/SignIn";

class Routes extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={UserTimeTable} />
            <Route exact path="/AboutUs" component={AboutUs} />
            <Route exact path="/SignIn" component={SignIn} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
