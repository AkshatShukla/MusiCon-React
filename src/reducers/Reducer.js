import * as constants from "../constants/index"

export const Reducer = (state = {widgets: [], preview: false}, action) => {
    let newState

    switch (action.type) {

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