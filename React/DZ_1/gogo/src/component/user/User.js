import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, withRouter, Link } from 'react-router-dom'


class User extends Component {
    render() {
        let {item,match: {url}} = this.props;
        return (
            <div>
                
                
                    {item.id}-{item.name} - <Link to={url + `/` + item.id}>User Detail</Link>
                
            </div>
        )
    }
}

export default withRouter (User);