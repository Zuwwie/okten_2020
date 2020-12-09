import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Link, withRouter } from 'react-router-dom'


class User extends Component {
    render() {

        let {item} =  this.props

        return (
            <div> 
                {item.id}-{item.name}-<Link to={``}>info</Link>
            </div>
        )
    }
}

export default withRouter (User);