import React, { Component } from 'react'
import UserService from '../../services/UserService'
// import User from '../user/User';

export default class AllUser extends Component {

    // userService = new UserService();
    userService = new UserService();
    state = { users: [] };


   async componentDidMount() {
    let users = await this.userService.users();
    this.setState({users});
}


    render() {
        // console.log(this.state);
        let state  = this.state;
        // let arr = [1,2,4,5,6,7,8]
        return (
            <div>

            {
                console.log(state)
            }

            </div>
        )
    }
}

