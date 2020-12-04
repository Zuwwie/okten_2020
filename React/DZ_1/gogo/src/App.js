import React, { Component } from 'react'
import PostComponents from './component/post/PostComponents';
// import UserComponent from './component/user/UserComponent';
import './App.css'

export default class App extends Component {

  state = {posts: [], classType: `red`};
  
  flag = true;


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                this.setState({posts: value});
            }).catch(e => {
              console.log(`Eror GET post`);
            })
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
