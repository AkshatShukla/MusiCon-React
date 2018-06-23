import LikedAlbums from "../components/LikedAlbums";
import {connect} from "react-redux";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    fetchLikedAlbums: () =>
        actions.fetchLikedAlbums(dispatch),
    dislikeAlbum: (album, type) =>
        actions.itemDisliked(dispatch, album, type)
});
const stateToPropsMapper = state => ({
    likedAlbums: state.likedAlbums
});
const LikedAlbumsContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(LikedAlbums);
export default LikedAlbumsContainer;