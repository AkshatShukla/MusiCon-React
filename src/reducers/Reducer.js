import * as constants from "../constants/index"

export const Reducer = (state = {
    widgets: [],
    clientid: 'OTlmMDIxMjk4MjBlNGM0YjlmNDk4OWQ5OGM1Y2JlODU6MGJhODViNzZjOGY0NDFlNTgwZGI1OTIwMGViYzJjMDA ='
}, action) => {
    let newState
    let Spotify_Authorization_URL = 'https://accounts.spotify.com/api/token';
    switch (action.type) {

        case constants.REFRESH_TOKEN:
            newState = Object.assign({}, state);
            if (newState.token === undefined || newState.token === null) {
                fetch("https://accounts.spotify.com/api/token", {
                    body: "grant_type=client_credentials",
                    headers: {
                        Authorization: "Basic ZjM4ZjAw...WY0MzE=",
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    method: "POST"
                }).then(response => console.log(response.json()))
            }
            else {

            }
            return newState;
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
}