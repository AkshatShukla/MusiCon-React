import {connect} from 'react-redux';
import PlaylistOfListener from '../components/PlaylistOfListener';
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    findAllPlaylistOFUser: () => actions.findAllPlaylistOfUser(dispatch),
    deletePlaylist: (playlist) => actions.deletePlaylist(dispatch, playlist),
    getTracksInPlaylist: (playlist, id) => actions.getTracksInPlaylist(dispatch, playlist, id),
    toggleDetails: (type) => actions.toggleDetails(dispatch, type),
    deleteTrackFromPlaylist: (track, playlist) => actions.deleteTrackFromPlaylist(dispatch, track, playlist)
});


const stateToPropsMapper = state => ({
    playlists: state.playlistsForListener,
    tracksInPlaylist: state.tracksInPlaylist,
    playlistModalToggle: state.playlistModalToggle,
    modalToggle: state.modalToggle
});

const PlaylistContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(PlaylistOfListener);
export default PlaylistContainer;