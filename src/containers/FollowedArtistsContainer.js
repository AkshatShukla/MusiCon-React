import FollowedArtists from "../components/FollowedArtists";
import {connect} from "react-redux";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    fetchFollowedArtists: (type) =>
        actions.fetchFollowed(dispatch, type),
    unfollowArtist: (artist, type) =>
        actions.itemDisliked(dispatch, artist, type)
});
const stateToPropsMapper = state => ({
    followedArtists: state.followedArtists
});
const FollowedArtistsContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(FollowedArtists);
export default FollowedArtistsContainer;