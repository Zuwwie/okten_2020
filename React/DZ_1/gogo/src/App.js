import React, { Component } from 'react'
import UserComponent from './component/user/UserComponent';

export default class App extends Component {

  users = [
    {name: 'Sasha', age: 22, status: true},
    {name: 'Yevhen', age: 18, status: true},
    {name: 'Taras', age: 28, status: true},
    {name: 'Alex', age: 25, status: true},
    {name: 'Kolya', age: 20, status: true},
];

  render() {
    return (
      <div>
        {this.users.map((user, index)=> {
          let color = `red`;
          if (index%2) {
            color = `silver`;
          };

          return (<UserComponent user = {user} key={index} clas = {color} />)
        })}
      </div>
    )
  }
}
