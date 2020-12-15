import React, { Component } from 'react'
import UserService from '../../services/UserService'
import User from '../user/User';

export default class AllUser extends Component {

    userService = new UserService();
    state = {users: []};


   async componentDidMount() {
       let users = await this.userService.users();
    this.setState({users});
}


    render() {
        let {users} = this.state;
        
        return (
            <div>
                
                
                {
                users.map((value) => (<User key={value.id} item={value} />))
                }


            </div>
        )
    }
}

