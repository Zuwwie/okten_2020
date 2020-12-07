export class UserService {

    url = 'https://jsonplaceholder.typicode.com/posts'

    getAllUsers() {
        return   fetch(this.url)
            .then(value => value.json())
            .then(value => value)
            .catch(e => {
              console.log(`Eror GET post`);
            })
    }
}; 