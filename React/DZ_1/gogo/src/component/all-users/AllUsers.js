import React, { Component } from "react";
import { UserService } from "../services/UserService";
import User from "../user/User";
import { BrowserRouter as  Route,  Switch } from 'react-router-dom'
import './AllUsers.css'

class AllUsers extends Component {
  state = { users: [] };

  userService = new UserService();

  async componentDidMount() {
    let users = await this.userService.getAllUsers();
    this.setState({ users });
  }

  render() {
    let { users } = this.state;
    return (
      <div>
        {users.map((value) => (
          <User key={value.id} item={value} />
        ))}

<div className={'nest'}>
  <Switch>
    <Route path={'/users/:id'} render={(props)=> 
    {
      // console.log(props);
      // this.userService.getUser()
      return `222`;

    }} />
  </Switch>
</div>


      </div>
    );
  }
}

export default AllUsers;