import * as actions from "../actions";
import * as constants from '../constants'

let _singleton = Symbol();

class ArtistServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ArtistServiceClient(_singleton);
        return this[_singleton]
    }

    insertIntoDatabase(result) {

    }
}

export default ArtistServiceClient;