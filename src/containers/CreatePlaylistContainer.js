import {connect} from 'react-redux'
import CreatePlaylist from '../components/CreatePlaylist'
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    textChanged: (type, newText) => actions.textChanged(dispatch, type, newText),
    createPlaylist: (playlistName, playListDescription) => actions.createPlaylist(dispatch, playlistName, playListDescription)
});

const stateToPropsMapper = state => ({
});

const CreatePlaylistContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(CreatePlaylist)
export default CreatePlaylistContainer;