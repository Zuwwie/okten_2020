import React, { Component } from "react";
// import UserComponent from "./component/user/User";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AllUser from "./component/all-users/AllUser";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to={'/users'} >to all users</Link>
            </li>
          </ul>
          <hr/>
          <Switch>
            <Route path={'/users'} render={()=> <AllUser/>} />
          </Switch>
          <hr/>
        </div>
      </Router>
    );
  }
}
