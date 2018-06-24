import * as constants from "../constants/index"

export const Reducer = (state = {
    username: '',
    password: '',
    verifyPassword: '',
    userType: undefined,
    eventLocation: '',
    query: '',
    eventName: '',
    venueName: '',
    eventDate: '',
    playlistName: '',
    playlistDescription: '',
    queryType: 'Album',
    eventsForConcertManager: [],
    likedAlbums: [],
    likedTracks: [],
    playlistsForListener: [],
    tracksInPlaylist: [],
    artistsInEvent: [],
    albumResults: [],
    trackResults: [],
    artistResults: [],
    searchFlag: '',
    details: {
        name: '',
        duration: '',
        listeners: '',
        lastFmUrl: '',
        image: '',
        album: '',
        artist: '',
        wiki: '',
        tracks: []
    },
    admin:{
        users:[]
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
            } else if (action.fieldType === 'eventName') {
                newState.eventName = action.text;
            } else if (action.fieldType === 'venueName') {
                newState.venueName = action.text;
            } else if (action.fieldType === 'eventDate') {
                newState.eventDate = action.text;
            } else if (action.fieldType === 'playlistName') {
                newState.playlistName = action.text;
            } else if (action.playlistDescription === 'playlistDescription') {
                newState.playlistDescription = action.text
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
            console.log(newState);
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
                    console.log(newState);
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
            newState.username = '';
            newState.password = '';
            newState.verifyPassword = '';
            newState.userType = undefined;
            console.log(newState);
            return newState;

        case constants.SET_DETAILS:
            newState = Object.assign({}, state);
            switch (action.flag) {
                case 'album':
                    newState.details.name = action.result.album.name;
                    newState.details.duration = '';
                    newState.details.listeners = action.result.album.listeners;
                    newState.details.lastFmUrl = action.result.album.url;
                    if (action.result.album.image.length > 3)
                        newState.details.image = action.result.album.image[2]['#text'];
                    newState.details.album = '';
                    newState.details.artist = action.result.album.artist;
                    newState.details.wiki = action.result.album.wiki;
                    newState.details.tracks = action.result.album.tracks.track;
                    newState.modalToggle = !newState.modalToggle;
                    return newState;
                case 'track':
                    newState.details.name = action.result.track.name;
                    newState.details.duration = action.result.track.duration;
                    newState.details.listeners = action.result.track.listeners;
                    newState.details.lastFmUrl = action.result.track.url;
                    newState.details.image = '';
                    newState.details.album = action.result.track.album;
                    newState.details.artist = action.result.track.artist;
                    newState.details.wiki = action.result.track.wiki;
                    newState.details.tracks = [];
                    newState.modalToggle = !newState.modalToggle;
                    return newState;
                case 'artist':
                    newState.details.name = action.result.artist.name;
                    newState.details.duration = '';
                    newState.details.listeners = action.result.artist.stats.listeners;
                    newState.details.lastFmUrl = action.result.artist.url;
                    if (action.result.artist.image.length > 3)
                        newState.details.image = action.result.artist.image[2]['#text'];
                    newState.details.album = '';
                    newState.details.artist = '';
                    newState.details.wiki = action.result.artist.bio;
                    newState.details.tracks = [];
                    newState.modalToggle = !newState.modalToggle;
                    return newState;
                default:
                    return newState;
            }

        case constants.TOGGLE_DETAILS:
            newState = Object.assign({}, state);
            newState.modalToggle = !newState.modalToggle;
            console.log(newState);
            return newState;

        case constants.ALL_EVENTS_FOR_USER:
            newState = Object.assign({}, state);
            newState.eventsForConcertManager = action.events;
            return newState;

        case constants.FETCH_LIKED_ITEMS:
            newState = Object.assign({}, state);
            switch (action.itemType) {
                case 'album':
                    newState.likedAlbums = action.likedAlbums;
                    return newState;
                case  'track':
                    newState.likedTracks = action.likedTracks;
                    return newState;
                default:
                    return newState;
            }

        case constants.ADMIN_SAVE_USERS:
            newState = Object.assign({}, state);
            newState.admin.users=action.users;
            return newState;

        case constants.ALL_PLAYLIST_FOR_USER:
            newState = Object.assign({}, state);
            newState.playlistsForListener = action.playlists;
            return newState;

        case constants.TRACKS_IN_PLAYLIST:
            newState = Object.assign({}, state);
            newState.tracksInPlaylist = action.tracks;
            return newState;

        case constants.ARTISTS_IN_EVENT:
            newState = Object.assign({}, state);
            newState.artistsInEvent = action.artists;
            return newState;

        default:
            return state
    }
};