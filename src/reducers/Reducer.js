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
    searchFlag: '',
    details: {
        name: '',
        duration: '',
        listeners: '',
        lastFmUrl: '',
        album: '',
        artist: '',
        wiki: ''
    },
    modalToggle: false
}, action) => {
    let newState;
    switch (action.type) {


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
            } else if (action.fieldType === 'city') {
                newState.city = action.text;
            } else if (action.fieldType === 'verifyPassword') {
                newState.verifyPassword = action.text
            } else if (action.fieldType === 'eventLocation') {
                newState.eventLocation = action.text
            } else if (action.fieldType === 'newQuery') {
                newState.query = action.text;
            } else if (action.fieldType === 'phone') {
                newState.phone = action.text;
            }

            return newState;

        case constants.FETCH_PROFILE:
            newState = Object.assign({}, state);
            newState.username = action.data.username;
            newState.firstName = action.data.firstName;
            newState.lastName = action.data.lastName;
            newState.email = action.data.email;
            newState.password = '';
            newState.verifyPassword = '';
            newState.dob = action.data.dob;
            newState.phone = action.data.phone;
            newState.userType = action.data.type;
            newState.city = action.data.city;
            newState.eventLocation = action.data.eventLocation;
            return newState;


        case constants.SAVE_USERTYPE:
            newState = Object.assign({}, state);
            newState.userType = action.userType;
            return newState;


        case constants.SAVE_USERNAME_AND_USERTYPE:
            newState = Object.assign({}, state);
            newState.username = action.username;
            newState.userType = action.userType;
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
                    newState.eventResults = action.results._embedded.events;
                    newState.searchFlag = action.flag;
                    return newState;
                case 'eventsforuser':
                    newState.eventsNearUser = action.results._embedded.events;
                    return newState;
                default:
                    return newState;
            }

        case constants.LOGOUT:
            newState = Object.assign({}, state);
            newState.type=undefined;
            return newState;

        case constants.SET_DETAILS:
            newState = Object.assign({}, state);
            switch (action.flag) {
                case 'album':
                    // to be done
                    return newState;
                case 'track':
                    newState.details.name = action.result.track.name;
                    newState.details.duration = action.result.track.duration;
                    newState.details.listeners = action.result.track.listeners;
                    newState.details.lastFmUrl = action.result.track.url;
                    newState.details.album = action.result.track.album;
                    newState.details.artist = action.result.track.artist;
                    newState.details.wiki = action.result.track.wiki;
                    newState.modalToggle = !newState.modalToggle;
                    return newState;
                case 'artist':
                    // to be done
                    return newState;
                default:
                    return newState;
            }

        case constants.TOGGLE_DETAILS:
            newState = Object.assign({}, state);
            newState.modalToggle = !newState.modalToggle;
            console.log(newState);
            return newState;
        default:
            return state
    }
};