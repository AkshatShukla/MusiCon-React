import LikedTracks from "../components/LikedTracks";
import {connect} from "react-redux";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    // functions to be written
});
const stateToPropsMapper = state => ({
    // albumResults: state.albumResults,
    // trackResults: state.trackResults,
    // artistResults: state.artistResults,
    // eventResults: state.eventResults,
    // modalToggle: state.modalToggle,
    // details: state.details,
    // flag: state.searchFlag
    username: state.username
});
const LikedTrackContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(LikedTracks);
export default LikedTrackContainer;