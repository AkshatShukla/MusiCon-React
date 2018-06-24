import {connect} from 'react-redux'
import ExploreAudiophile from "../components/ExploreAudiophile";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    findAllAudiophile: () => actions.findAllAudiophile(dispatch),
});

const stateToPropsMapper = state => ({
});

const ExploreAudiophileContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(ExploreAudiophile)
export default ExploreAudiophileContainer;