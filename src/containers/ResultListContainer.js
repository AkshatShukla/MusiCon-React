import ResultList from "../components/ResultList";
import {connect} from "react-redux";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    selectedItem: (artist, track, type) =>
        actions.selectedItem(dispatch, artist, track, type),
    toggleDetails: (toggleType) =>
        actions.toggleDetails(dispatch, toggleType),
    like : (result,type)  => actions.itemLiked(dispatch,result,type),
    addTrackToPlaylist: (track, playlist) =>
        actions.addTrackToPlaylist(dispatch, track, playlist),
    recommend: (item,type) =>
        actions.recommend(dispatch,item,type)
});
const stateToPropsMapper = state => ({
    albumResults: state.albumResults,
    trackResults: state.trackResults,
    artistResults: state.artistResults,
    eventResults: state.eventResults,
    modalToggle: state.modalToggle,
    playlistModalToggle: state.playlistModalToggle,
    details: state.details,
    flag: state.searchFlag,
    type: state.userType,
    playlistsForListener: state.playlistsForListener
});
const ResultListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(ResultList);
export default ResultListContainer;