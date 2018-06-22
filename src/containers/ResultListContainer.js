import ResultList from "../components/ResultList";
import {connect} from "react-redux";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    selectedTrack: (artist, track) =>
        actions.selectedTrack(dispatch, artist, track),
    toggleDetails: () =>
        actions.toggleDetails(dispatch),
    like :(result,type)  => actions.itemLiked(dispatch,result,type)
});
const stateToPropsMapper = state => ({
    albumResults: state.albumResults,
    trackResults: state.trackResults,
    artistResults: state.artistResults,
    eventResults: state.eventResults,
    modalToggle: state.modalToggle,
    details: state.details,
    flag: state.searchFlag
});
const ResultListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(ResultList);
export default ResultListContainer;