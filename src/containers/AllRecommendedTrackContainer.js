import {connect} from "react-redux";
import AllRecommendedTrack from '../components/AllRecommendedTrack'
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    allRecommendedTrack: () => actions.allRecommendedTrack(dispatch),
    deleteRecommendedTrack: (recommendedTrackId) => actions.deleteRecommendedTrack(dispatch, recommendedTrackId)
});
const stateToPropsMapper = state => ({
    allTracks: state.admin.allRecommendedTrack
});

const AllRecommendedTrackContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(AllRecommendedTrack);
export default AllRecommendedTrackContainer;