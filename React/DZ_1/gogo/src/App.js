import React, { Component } from 'react'
import AllUsers from './component/all-users/AllUsers';
// import UserComponent from './component/user/UserComponent';
import { BrowserRouter as Router, Route,  Link, Switch } from 'react-router-dom'
import AllPosts from './component/all-posts/AllPosts';

export default class App extends Component {


  render() {
    return (
      <Router>
      <div>
        <a href='/users'>User</a>
        <hr/>
        <Link to={'/users'}>User</Link>
        <hr/>
        <Link to={'/posts'}>Post</Link>

        <Switch>
          <Route path={'/users'} render={()=> {return <AllUsers/>}}/>
          <Route path={'/posts'} component={AllPosts} />
        </Switch>

      </div>
      </Router>
    )
  }
}
