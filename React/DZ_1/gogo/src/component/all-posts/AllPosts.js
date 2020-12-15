import React, { Component } from 'react'
import Post from '../post/Post';
import {PostService} from '../services/PostService';
import { BrowserRouter as  Route, Switch } from 'react-router-dom'



class AllPosts extends Component {

state={posts: []};

postService = new PostService();

   async componentDidMount(){
    let posts = await this.postService.getAllPosts();
    this.setState({posts});
}

    render() {
        let {posts} = this.state;
        return (
            <div>
                all post are here
                {posts.map((value) => (
          <Post key={value.id} item={value} />
        ))}
        <div>
  <Switch>
    <Route path={'/posts/:id'} render={(props)=> 
    {
        
      // console.log(props);
      // this.userService.getUser()
      return `post123`;

    }} />
  </Switch>
</div>
            </div>
        )
    }
}
export default AllPosts;
