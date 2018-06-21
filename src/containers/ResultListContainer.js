import ResultList from "../components/ResultList";
import {connect} from "react-redux";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    // queryChanged: (newQuery) =>
    //     actions.queryChanged(dispatch, newQuery),
    // searchTypeChanged: (newType) =>
    //     actions.searchTypeChanged(dispatch, newType),
    // searchQuery: (query, queryType) =>
    //     actions.searchQuery(dispatch, query, queryType)
});
const stateToPropsMapper = state => ({
    albumResults: state.albumResults,
    trackResults: state.trackResults,
    artistResults: state.artistResults,
    flag: state.searchFlag
});
const ResultListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(ResultList);
export default ResultListContainer;