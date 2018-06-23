import * as constants from '../constants'

let _singleton = Symbol();

class AdminServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new AdminServiceClient(_singleton);
        return this[_singleton]
    }

    getUsers(){
        return fetch(constants.BASE_URL+'admin/user',{
            method: 'get',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export default AdminServiceClient;