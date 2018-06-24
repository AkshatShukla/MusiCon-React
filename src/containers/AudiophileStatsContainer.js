import AudiophileStats from "../components/AudiophileStats";
import {connect} from "react-redux";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    // functions to be written
});
const stateToPropsMapper = state => ({
    username: state.username,
    description: state.description
});
const AudiophileStatsContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(AudiophileStats);
export default AudiophileStatsContainer;