import React from 'react'
import PlaylistListItem from "./PlaylistListItem";


export default class PlaylistOfListener extends React.Component {

    constructor(props) {
        super(props)
        this.props.findAllPlaylistOFUser();
    }

    renderList(playlists){
        return playlists.map(playlist =>
            <div className="col-sm-3" key={playlist._id}>
                <PlaylistListItem
                    playlist = {playlist}
                    tracksInPlaylist = {this.props.tracksInPlaylist}
                    playlistModalToggle={this.props.playlistModalToggle}
                    deletePlaylist = {this.props.deletePlaylist}
                    getTracksInPlaylist = {this.props.getTracksInPlaylist}
                    toggleDetails={this.props.toggleDetails}
                    deleteTrackFromPlaylist={this.props.deleteTrackFromPlaylist}/>
            </div>
        )
    }

    render () {
        return (
            <div className="card-deck row">
                {this.renderList(this.props.playlists)}
            </div>
        )
    }
}
