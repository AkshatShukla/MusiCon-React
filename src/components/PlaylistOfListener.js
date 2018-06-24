import React from 'react'
import PlaylistListItem from "./PlaylistListItem";


export default class PlaylistOfListener extends React.Component {

    constructor(props) {
        super(props);
        this.state={id:''};
        this.props.findAllPlaylistOFUser();

        this.editEvent =this.editEvent.bind(this);
        this.updateEvent =this.updateEvent.bind(this);
        this.textChanged =this.textChanged.bind(this);
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
                    modalToggle={this.props.modalToggle}
                    deleteTrackFromPlaylist={this.props.deleteTrackFromPlaylist}
                    id={this.state.id}
                    editEvent={this.editEvent}
                    updateEvent={this.updateEvent}
                    textChanged={this.textChanged}/>
            </div>
        )
    }
    textChanged(text,type){
        if(type==='name'){this.setState({name:text});}
        else if(type==='description'){this.setState({description:text});}

    }
    updateEvent(){
        this.props.updatePlaylist({name:this.state.name,description:this.state.description,_id:this.state.id});
        this.setState({id:''})
    }
    editEvent(id){
        this.setState({id:id});
    }
    render () {
        return (
            <div className="card-deck row">
                {this.renderList(this.props.playlists)}
            </div>
        )
    }
}
