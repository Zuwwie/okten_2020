import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import UserService from '../../services/UserService'
import FullUser from '../full-user/FullUser';
import User from '../user/User';


class AllUser extends Component {

    userService = new UserService();
    state = { users: [] };


   async componentDidMount() {
    let users = await this.userService.users();
    this.setState({users});
}


    render() {
        let {users}  = this.state;
        let {match: {url}} = this.props
        return (
            <div>

            {
                users.map(value=> <User item={value} key={value.id} />)
            }
            <hr/>
            <Switch>
                <Route path={url + `/:id`} render={(props)=> {
                    let {match: {params: {id}}} = props;
                   return <FullUser id={id} key={id} />
                }}></Route>
            </Switch>
            <hr/>

            </div>

        );
    }
}

export default withRouter (AllUser);