import {connect} from 'react-redux'
import ExploreAudiophile from "../components/ExploreAudiophile";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    findAllAudiophile: () => actions.findAllAudiophile(dispatch),
    followAudiophile: (id,username) => actions.followAudiophile(dispatch,id,username),
    getAudiophileContent: (id,type) => actions.getAudiophileContent(dispatch,id,type),
    closeContentPane:() => actions.closeContentPane(dispatch)
});

const stateToPropsMapper = state => ({
    audiophiles:state.audiophileResults,
    type:state.audiophileItemType,
    items:state.audiophileItems,
    toShowId:state.audiophileDetailsId,

});

const ExploreAudiophileContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(ExploreAudiophile)
export default ExploreAudiophileContainer;