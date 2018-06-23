import {connect} from 'react-redux';
import PlaylistOfListener from '../components/PlaylistOfListener';
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    findAllPlaylistOFUser: () => actions.findAllPlaylistOfUser(dispatch),
    deletePlaylist: (playlist) => actions.deletePlaylist(dispatch, playlist),
    getTracksInPlaylist: (playlist) => actions.getTracksInPlaylist(dispatch, playlist)
});


const stateToPropsMapper = state => ({
    playlists: state.playlistsForListener,
    tracksInPlaylist: state.tracksInPlaylist
});

const PlaylistContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(PlaylistOfListener);
export default PlaylistContainer;