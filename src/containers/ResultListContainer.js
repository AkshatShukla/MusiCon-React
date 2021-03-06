import ResultList from "../components/ResultList";
import {connect} from "react-redux";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    selectedItem: (artist, track, type, id) =>
        actions.selectedItem(dispatch, artist, track, type, id),
    toggleDetails: (id) =>
        actions.toggleDetails(dispatch, id),
    togglePlaylist: (id) =>
        actions.togglePlaylist(dispatch, id),
    toggleEvent: (id) =>
        actions.toggleEvent(dispatch, id),
    like : (result,type)  => actions.itemLiked(dispatch,result,type),
    addTrackToPlaylist: (track, playlist) =>
        actions.addTrackToPlaylist(dispatch, track, playlist),
    addArtistToEvent: (artist, event) =>
        actions.addArtistToEvent(dispatch, artist, event),
    recommend: (item, type) =>
        actions.recommend(dispatch, item, type),
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
    playlistsForListener: state.playlistsForListener,
    eventModalToggle: state.eventModalToggle,
    eventsForConcertManager: state.eventsForConcertManager
});
const ResultListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(ResultList);
export default ResultListContainer;