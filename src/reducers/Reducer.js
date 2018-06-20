import * as constants from "../constants/index"
import SearchServiceClient from "../services/search.service.client";

export const Reducer = (state = {
    username:'',
    password:'',
    userType: '',
    widgets: [],
    clientId: constants.clientid,
    query: '',
    queryType: 'Album'
}, action) => {
    let newState;
    let searchServiceClient = SearchServiceClient.instance;
    switch (action.type) {

        case constants.USERNAME_TEXT_CHANGED:
            newState = Object.assign({}, state);
            newState.username = action.text;
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

        case constants.REFRESH_TOKEN:
            newState = Object.assign({}, state);
            return newState;
        // check if token has been updated?

        case constants.QUERY_CHANGED:
            newState = Object.assign({}, state);
            newState.query = action.query;
            return newState;


        case constants.TYPE_CHANGED:
            newState = Object.assign({}, state);
            newState.queryType = action.searchType;
            return newState;

        case constants.SEARCH:
            searchServiceClient
                .searchQuery(action.query.value, action.searchType.value)
                .then((r)=>console.log(r));
            console.log(state);
            return state;
        // case constants.REFRESH_TOKEN:
        //     newState = Object.assign({}, state);
        //     if (newState.token === undefined || newState.token === null) {
        //         fetch("https://accounts.spotify.com/api/token", {
        //             body: "grant_type=client_credentials",
        //             headers: {
        //                 Authorization: "Basic ZjM4ZjAw...WY0MzE=",
        //                 "Content-Type": "application/x-www-form-urlencoded"
        //             },
        //             method: "POST"
        //         }).then(response => console.log(response.json()))
        //     }
        //     else {
        //
        //     }
        //     return newState;
        // Some example of reducer
        // case constants.SAVE:
        //     console.log(state.widgets)
        //     fetch('http://localhost:8080/api/widget', {
        //         method: 'post',
        //         body: JSON.stringify(state.widgets),
        //         headers: {
        //             'content-type': 'application/json'
        //         }
        //     })
        //     return state
        //
        // case constants.FIND_ALL_WIDGETS:
        //     newState = Object.assign({}, state)
        //     if (action.widgets.status === 500) {
        //         return newState
        //     }
        //     else {
        //
        //         newState.widgets = action.widgets.sort(GetSortOrder('order1'))
        //
        //         return newState
        //     }
        //
        //
        // case constants.ADD_WIDGET:
        //     console.log("in add")
        //     return {
        //         widgets: [
        //             ...state.widgets,
        //             {
        //                 id: state.widgets.length + 1,
        //                 order1: state.widgets.length + 1,
        //                 text: 'New Widget',
        //                 className: 'Paragraph',
        //                 size: '2'
        //             }
        //         ]
        //     }


        default:
            return state
    }
};