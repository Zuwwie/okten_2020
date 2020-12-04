import React, { Component } from "react";

export default class PostComponents extends Component {
  state = { click: false };

  flag = false
    
  postInfo = () => {
    if (this.flag) {
      this.setState({ click: false });
    } else {
      this.setState({ click: true });
    }
    this.flag = !this.flag;

  };

  render() {
    let { post } = this.props;
    let info = ``;
    if (this.flag) {
        info =  post.body
    } else {
        info = ``
    }

    return (
      <div onClick={this.postInfo}>
        <h4>
          {post.id}-{post.title}
          <p>{info}</p>
        </h4>
      </div>
    );
  }
}
