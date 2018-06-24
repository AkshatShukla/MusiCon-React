import AudiophileStats from "../components/AudiophileStats";
import {connect} from "react-redux";

const dispatchToPropsMapper = dispatch => ({
});
const stateToPropsMapper = state => ({
    username: state.username,
    description: state.description
});
const AudiophileStatsContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(AudiophileStats);
export default AudiophileStatsContainer;