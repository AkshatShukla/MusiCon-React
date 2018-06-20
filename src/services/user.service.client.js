let _singleton = Symbol();
const USER_API_URL = 'http://localhost:8080/api/course';//later change this to heroku url
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


}
export default UserServiceClient;