import React, { Component } from 'react'
import './User.css'

export default class UserComponent extends Component {
    render() {
        let {user, clas} = this.props;
        // console.log(this.props);
        return (
            <div className={clas}>
                <h3>{user.name} - {user.age} - {user.status.toString()}</h3>
            </div>
        )
    }
}
