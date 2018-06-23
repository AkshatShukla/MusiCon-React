import React from 'react'
import PlaylistListItem from "./PlaylistListItem";


export default class PlaylistOfListener extends React.Component {

    constructor(props) {
        super(props)
        this.props.findAllPlaylistOFUser();
    }

    renderList(playlists){
        return playlists.map(playlist =>
            <div className="col-sm-3">
                <PlaylistListItem
                    playlist = {playlist}
                    deletePlaylist = {this.props.deletePlaylist}
                    getTracksInPlaylist = {this.props.getTracksInPlaylist}
                    tracksInPlaylist = {this.props.tracksInPlaylist}/>
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
