import * as constants from "../constants/index"


// Example of actions
// export const headingTextChanged = (dispatch, widgetId, newText) => (
//   dispatch({
//     type: constants.HEADING_TEXT_CHANGED,
//     id: widgetId,
//     text: newText})
// )

export const queryChanged = (dispatch, newQuery) => (
    dispatch({
        type: constants.QUERY_CHANGED,
        query: newQuery
    })
);

export const searchTypeChanged = (dispatch, newType) => (
    dispatch({
        type: constants.TYPE_CHANGED,
        searchType: newType
    })
);

export const searchQuery = (dispatch, query, queryType) => (
    dispatch({
        type: constants.SEARCH,
        query: query,
        searchType: queryType
    })
);

export const refreshToken = (dispatch, newToken) => (
    dispatch({
        type: constants.REFRESH_TOKEN,
        token: newToken
    })
);

