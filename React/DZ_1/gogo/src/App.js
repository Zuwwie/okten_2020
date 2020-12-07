import React, { Component } from 'react'
import PostComponents from './component/post/PostComponents';
// import UserComponent from './component/user/UserComponent';
import './App.css'
import { UserService } from './services/UserService';

export default class App extends Component {

  userService = new UserService();

  state = {posts: [], classType: `red`};
  
  flag = true;


  componentDidMount(){
    this.userService.getAllUsers().then(value => this.setState({posts: value}));
  }

  chengeColor = () => {
    this.flag ? this.setState({classType: `silver`}) : this.setState({classType: `red`});

    this.flag = !this.flag;
  }



  render() {
  let {posts} = this.state;

    return (
      <div>
        <h2 onClick={this.chengeColor} className={this.state.classType}>Loler</h2>
        {
          posts.map(value => (<PostComponents post = {value} key = {value.id} />))
        }
      </div>
    )
  }
}
