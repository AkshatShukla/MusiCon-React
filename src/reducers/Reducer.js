import * as constants from "../constants/index"

export const Reducer = (state = {
    username: '',
    password: '',
    verifyPassword: '',
    userType: '',
    eventLocation: '',
    query: '',
    queryType: 'Album',
    albumResults: [],
    trackResults: [],
    artistResults: [],
    searchFlag: ''
}, action) => {
    let newState;
    switch (action.type) {

        case constants.SAVE:
            newState = Object.assign({}, state);
            console.log(newState);
            return newState;

        case constants.TEXT_CHANGED:
            newState = Object.assign({}, state);
            if (action.fieldType === 'username') {
                newState.username = action.text;
            }
            else if (action.fieldType === 'password') {
                newState.password = action.text;
            } else if (action.fieldType === 'firstName') {
                newState.firstName = action.text;
            } else if (action.fieldType === 'lastName') {
                newState.lastName = action.text;
            } else if (action.fieldType === 'email') {
                newState.email = action.text;
            } else if (action.fieldType === 'dob') {
                newState.dob = action.text;
            } else if (action.fieldType === 'address') {
                newState.address = action.text;
            } else if (action.fieldType === 'verifyPassword') {
                newState.verifyPassword = action.text
            } else if (action.fieldType === 'eventLocation') {
                newState.eventLocation = action.text
            } else if (action.fieldType === 'newQuery') {
                newState.query = action.text;
            }

            return newState;

        case constants.FETCH_PROFILE:
            newState = Object.assign({}, state);
            newState.username = action.data.username;
            newState.firstName = action.data.firstName;
            newState.lastName = action.data.lastName;
            newState.email = action.data.email;
            newState.dob = action.data.dob;
            newState.phone = action.data.phone;
            newState.userType = action.data.userType;
            newState.eventLocation = action.data.eventLocation;
            return newState;


        case constants.SAVE_USERTYPE:
            newState = Object.assign({}, state);
            newState.userType = action.userType;
            return newState;

        case constants.PASSWORD_TEXT_CHANGED:
            newState = Object.assign({}, state);
            newState.password = action.text;
            return newState;

        case constants.SAVE_USERNAME_AND_USERTYPE:
            newState = Object.assign({}, state);
            newState.username = action.username;
            newState.userType = action.userType;
            return newState;

        case constants.QUERY_CHANGED:
            newState = Object.assign({}, state);
            newState.query = action.query;
            return newState;


        case constants.TYPE_CHANGED:
            newState = Object.assign({}, state);
            newState.queryType = action.searchType;
            return newState;

        case constants.SEARCH:
            newState = Object.assign({}, state);
            switch (action.flag) {
                case 'album':
                    newState.albumResults = action.results;
                    newState.searchFlag = action.flag;
                    return newState;
                case 'track':
                    newState.trackResults = action.results;
                    newState.searchFlag = action.flag;
                    return newState;
                case 'artist':
                    newState.artistResults = action.results;
                    newState.searchFlag = action.flag;
                    return newState;
                case 'events':
                    // console.log('events',action.results._embedded.events);
                    newState.eventResults = action.results._embedded.events;
                    newState.searchFlag = action.flag;
                default:
                    return newState;
            }
        default:
            return state
    }
};