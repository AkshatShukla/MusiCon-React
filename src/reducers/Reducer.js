import * as constants from "../constants/index"

export const Reducer = (state = {
    username: '',
    password: '',
    verifyPassword: '',
    description: '',
    userType: undefined,
    eventLocation: '',
    query: '',
    eventName: '',
    dob: '',
    venueName: '',
    eventDate: '',
    playlistName: '',
    playlistDescription: '',
    queryType: 'Album',
    eventsForConcertManager: [],
    likedAlbums: [],
    likedTracks: [],
    followedArtists: [],
    followedAudiophiles: [],
    recommendedAlbums: [],
    recommendedTracks: [],
    playlistsForListener: [],
    tracksInPlaylist: [],
    artistsInEvent: [],
    albumResults: [],
    trackResults: [],
    artistResults: [],
    audiophileResults: [],
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
    admin: {
        users: [],
        allLikedAlbum: [],
        allLikedTrack: [],
        allRecommendedAlbum: [],
        allRecommendedTrack: []
    },
    modalToggle: '',
    playlistModalToggle: '',
    eventModalToggle: '',
    audiophileItemType :'',
    audiophileItems: [],
    audiophileDetailsId:'',
    eventsNearUser: {
        'tn':[],
        'lr':[]
    }
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
            } else if (action.fieldType === 'playlistDescription') {
                newState.playlistDescription = action.text
            } else if (action.fieldType === 'description') {
                newState.description = action.text
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
            newState.description = action.data.description;
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
                    newState.modalToggle = action.id;
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
                    newState.modalToggle = action.id;
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
                    newState.modalToggle = action.id;
                    return newState;
                default:
                    return newState;
            }

        case constants.TOGGLE:
            newState = Object.assign({}, state);
            newState.modalToggle = action.id;
            return newState;


        case constants.TOGGLE_PLAYLIST:
            newState = Object.assign({}, state);
            newState.playlistModalToggle = action.id;
            return newState;

        case constants.TOGGLE_EVENT:
            newState = Object.assign({}, state);
            console.log(action.id);
            newState.eventModalToggle = action.id;
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
                case 'artist':
                    newState.followedArtists = action.followedArtists;
                    return newState;
                case 'audiophile':
                    newState.followedAudiophiles = action.followedAudiophiles;
                    return newState;
                default:
                    return newState;
            }

        case constants.FETCH_RECOMMENDED_ITEMS:
            newState = Object.assign({}, state);
            switch (action.itemType) {
                case 'album':
                    newState.recommendedAlbums = action.recommendedAlbums;
                    return newState;
                case 'track':
                    newState.recommendedTracks = action.recommendedTracks;
                    return newState;
                default:
                    return newState;
            }

        case constants.ADMIN_SAVE_USERS:
            newState = Object.assign({}, state);
            newState.admin.users = action.users;
            return newState;

        case constants.ALL_PLAYLIST_FOR_USER:
            newState = Object.assign({}, state);
            newState.playlistsForListener = action.playlists;
            return newState;

        case constants.TRACKS_IN_PLAYLIST:
            newState = Object.assign({}, state);
            newState.tracksInPlaylist = action.tracks;
            newState.modalToggle = action.id;
            return newState;

        case constants.ARTISTS_IN_EVENT:
            newState = Object.assign({}, state);
            newState.artistsInEvent = action.artists;
            newState.eventModalToggle = action.id;
            return newState;

        case constants.AUDIOPHILE_RESULTS:
            newState = Object.assign({}, state);
            newState.audiophileResults = action.audiophiles;
            return newState;
        case constants.AUDIOPHILE_RECOMMEND_RESULTS:
            newState = Object.assign({}, state);
            newState.audiophileItemType = action.audiophileResultType;
            newState.audiophileItems = action.items;
            return newState;
        case constants.OPEN_AUDIOPHILE_DETAILS:
            newState = Object.assign({}, state);
            newState.audiophileDetailsId = action.id;
            return newState;
        case constants.CLOSE_AUDIOPHILE_DETAILS:
            newState = Object.assign({}, state);
            newState.audiophileDetailsId = '';
            return newState;
        case constants.EVENTS_NEAR_USER:
            newState = Object.assign({}, state);
            newState.eventsNearUser = action.events;
            return newState;

        case constants.ALL_LIKED_ALBUM:
            newState = Object.assign({}, state);
            newState.admin.allLikedAlbum = action.data;
            return newState;

        case constants.ALL_LIKED_TRACK:
            newState = Object.assign({}, state);
            newState.admin.allLikedTrack = action.data;
            return newState;

        case constants.ALL_RECOMMENDED_ALBUM:
            newState = Object.assign({}, state);
            newState.admin.allRecommendedAlbum = action.data;
            return newState;

        case constants.ALL_RECOMMENDED_TRACK:
            newState = Object.assign({}, state);
            newState.admin.allRecommendedTrack = action.data;
            return newState;

        case constants.DROP_SEARCH_RESULT:
            newState = Object.assign({}, state);
            newState.albumResults = [];
            newState.searchFlag = '';
            newState.trackResults = [];
            newState.artistResults = [];
            newState.eventResults = [];
            newState.eventsNearUser = [];
            return newState;
        default:
            return state
    }
};