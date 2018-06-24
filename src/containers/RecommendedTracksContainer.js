import RecommendedTracks from "../components/RecommendedTracks";
import {connect} from "react-redux";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    fetchRecommendedTracks: (type) =>
        actions.fetchRecommended(dispatch, type),
    removeTrack: (track, type) =>
        actions.itemUnrecommended(dispatch, track, type)
});
const stateToPropsMapper = state => ({
    recommendedTracks: state.recommendedTracks
});
const RecommendedTracksContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(RecommendedTracks);
export default RecommendedTracksContainer;