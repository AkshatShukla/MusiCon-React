import SearchBar from "../components/SearchBar";
import {connect} from "react-redux";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    queryChanged: (newQuery) =>
        actions.textChanged(dispatch, 'newQuery', newQuery),
    searchTypeChanged: (newType) =>
        actions.searchTypeChanged(dispatch, newType),
    searchQuery: (query, queryType) =>
        actions.searchQuery(dispatch, query, queryType)
});
const stateToPropsMapper = state => ({
    // flag: state.searchFlag
});
const SearchContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(SearchBar);
export default SearchContainer;