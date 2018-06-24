import FollowedAudiophiles from "../components/FollowedAudiophiles";
import {connect} from "react-redux";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    fetchFollowedAudiophiles: (type) =>
        actions.fetchFollowed(dispatch, type),
    unfollowAudiophile: (audiophile, type) =>
        actions.itemDisliked(dispatch, audiophile, type)
});
const stateToPropsMapper = state => ({
    followedAudiophiles: state.followedAudiophiles
});
const FollowedAudiophilesContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(FollowedAudiophiles);
export default FollowedAudiophilesContainer;