import {connect} from 'react-redux';
import PlaylistOfListener from '../components/PlaylistOfListener';
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    findAllPlaylistOFUser: () => actions.findAllPlaylistOfUser(dispatch),
    deletePlaylist: (playlist) => actions.deletePlaylist(dispatch, playlist),
    getTracksInPlaylist: (playlist) => actions.getTracksInPlaylist(dispatch, playlist),
    toggleDetails: (type) => actions.toggleDetails(dispatch, type),
    deleteTrackFromPlaylist: (track, playlist) => actions.deleteTrackFromPlaylist(dispatch, track, playlist)
});


const stateToPropsMapper = state => ({
    playlists: state.playlistsForListener,
    tracksInPlaylist: state.tracksInPlaylist,
    playlistModalToggle: state.playlistModalToggle
});

const PlaylistContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(PlaylistOfListener);
export default PlaylistContainer;