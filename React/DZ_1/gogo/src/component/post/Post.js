import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Link, withRouter } from 'react-router-dom'


class Post extends Component {
    render() {

        let {item} =  this.props

        return (
            <div> 
                {item.id}-{item.name}-<Link to={`/posts/${item.id}`}>info</Link>
            </div>
        )
    }
}

export default withRouter (Post);