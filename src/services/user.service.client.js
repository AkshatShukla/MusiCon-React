let _singleton = Symbol();
const BASE_URL = 'http://localhost:4000/api/';//later change this to heroku url
class UserServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new UserServiceClient(_singleton);
        return this[_singleton]
    }
    // findAllCourses() {
    //     return fetch(COURSE_API_URL)
    //         .then(function(response){
    //             return response.json();
    //         });
    // }

    login(username, password) {
        var user = {
            username: username,
            password: password
        };
        return fetch(BASE_URL+'/login/',{
            method: 'post',
            credentials: "include",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }


}
export default UserServiceClient;