import {connect} from "react-redux";
import AllLikedTrack from '../components/AllLikedTrack'
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    allLikedTrack: () => actions.allLikedTrack(dispatch),
    deleteLikedTrack: (likedTrackId) => actions.deleteLikedTrack(dispatch, likedTrackId)
});
const stateToPropsMapper = state => ({
    allTracks: state.admin.allLikedTrack
});

const AllLikedTrackContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(AllLikedTrack);
export default AllLikedTrackContainer;