export default class UserService {
  url = 'https://jsonplaceholder.typicode.com/users';

  async users() {
    return await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
  }
  async user(id) {
      return await fetch(this.url + `/${id}`).then(value=> value.json());
  }


}
