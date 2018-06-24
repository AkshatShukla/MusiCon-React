import React from 'react'
import AudiophileServiceClient from "../services/audiophile.service.client";

export default class ExploreAudiophile extends React.Component {
    constructor(props){
        super(props);
        this.props.findAllAudiophile();
    }
    renderAudiophiles(){
        return this.props.audiophiles.map(audiophile =>
            (
                <div className="row border m-2" >
                        <h5 className="col-3 ">{audiophile.username}</h5>
                        <p className="col-4">{audiophile.description}</p>
                    <div className="col-5 btn-group p-2">
                        <button className="btn btn-primary m-1"
                        onClick={() => this.followAudiophile(audiophile._id,audiophile.username)}>
                            Follow</button>
                    <button className="btn btn-primary m-1"
                            onClick={() => this.showContent(audiophile._id,'album')}>
                        Recommended Albums</button>
                    <button className="btn btn-primary m-1"
                            onClick={() => this.showContent(audiophile._id,'track')}>
                        Recommended Tracks</button>
                    </div>
                    <div hidden={audiophile._id!==this.props.toShowId} className="container-fluid border m-4">
                        <h1>Showing {this.props.type}</h1>
                        <ul>
                        {this.renderDetails()}
                        </ul>
                        <button className="btn btn-primary m-1"
                                onClick={() => this.props.closeContentPane()}>Close</button>
                    </div>
                </div>
            ))
    }
    renderDetails(){
        if(this.props.type==='track'){
            return this.renderTracks();
        }
        else{
            return this.renderAlbums();
        }
    }
    renderTracks(){
        return this.props.items.map(item =>(
            <li>{item.track.name}</li>
        ))
    }
    renderAlbums(){
        return this.props.items.map(item =>(
            <li>{item.album.name}</li>
        ))
    }
    showContent(id,type){
        this.props.getAudiophileContent(id,type);
    }
    followAudiophile(id,username){
        this.props.followAudiophile(id,username);
    }
    render() {
        return (
            <div className="card shadow p-3 mb-5 bg-white rounded">
                {this.renderAudiophiles()}

            </div>
        )
    }
};
