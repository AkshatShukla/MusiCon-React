import LikedTracks from "../components/LikedTracks";
import {connect} from "react-redux";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    fetchLikedTrack: () =>
        actions.fetchLikedTracks(dispatch),
    dislikeTrack: (track, type) =>
        actions.itemDisliked(dispatch, track, type)
});
const stateToPropsMapper = state => ({
    likedTracks: state.likedTracks
});
const LikedTrackContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(LikedTracks);
export default LikedTrackContainer;