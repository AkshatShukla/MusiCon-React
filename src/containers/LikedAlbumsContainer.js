import LikedAlbums from "../components/LikedAlbums";
import {connect} from "react-redux";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    // functions to be written
    fetchLikedAlbums: () =>
        actions.fetchLikedAlbums(dispatch),
    dislikeAlbum: (album, type) =>
        actions.itemDisliked(dispatch, album, type)
});
const stateToPropsMapper = state => ({
    // albumResults: state.albumResults,
    // trackResults: state.trackResults,
    // artistResults: state.artistResults,
    // eventResults: state.eventResults,
    // modalToggle: state.modalToggle,
    // details: state.details,
    // flag: state.searchFlag
    likedAlbums: state.likedAlbums
});
const LikedAlbumsContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(LikedAlbums);
export default LikedAlbumsContainer;