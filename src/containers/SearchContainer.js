import SearchBar from "../components/SearchBar";
import {connect} from "react-redux";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    queryChanged: (newQuery) =>
        actions.queryChanged(dispatch, newQuery),
    searchTypeChanged: (newType) =>
        actions.searchTypeChanged(dispatch, newType),
    searchQuery: (query, queryType) =>
        actions.searchQuery(dispatch, query, queryType)
});
const stateToPropsMapper = state => ({
    // preview: state.preview
});
const SearchContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(SearchBar);
export default SearchContainer;