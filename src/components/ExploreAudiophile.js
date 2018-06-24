import React from 'react'
import AudiophileServiceClient from "../services/audiophile.service.client";
import {Jumbotron} from 'reactstrap';

export default class ExploreAudiophile extends React.Component {
    constructor(props) {
        super(props);
        this.props.findAllAudiophile();
    }

    renderAudiophiles() {
        return this.props.audiophiles.map(audiophile =>
            (
                <div className="row border m-2">
                    <h5 className="col-3 mt-3 ">{audiophile.username}</h5>
                    <p className="col-4">{audiophile.description}</p>
                    <div className="col-5 btn-group p-2">

                        <button className="btn btn-outline-dark m-1"
                                onClick={() => this.showContent(audiophile._id, 'album')}>
                            Recommended Albums
                        </button>
                        <button className="btn btn-outline-dark m-1"
                                onClick={() => this.showContent(audiophile._id, 'track')}>
                            Recommended Tracks
                        </button>
                        <button className="btn btn-success m-1"
                                onClick={() => this.followAudiophile(audiophile._id, audiophile.username)}>
                            Follow
                        </button>
                    </div>
                    <div hidden={audiophile._id !== this.props.toShowId} className="container-fluid border m-4">
                        <h1>Recommended {this.props.type}s</h1>
                        <ul className="list-group border">
                            {this.renderDetails()}
                        </ul>
                        <button className="btn btn-dark m-1"
                                onClick={() => this.props.closeContentPane()}>Close
                        </button>
                    </div>
                </div>
            ))
    }

    renderDetails() {
        if (this.props.type === 'track') {
            return this.renderTracks();
        }
        else {
            return this.renderAlbums();
        }
    }

    renderTracks() {
        return this.props.items.map(item => (
            <li className="list-group-item">{item.track.name}</li>
        ))
    }

    renderAlbums() {
        return this.props.items.map(item => (
            <li className="list-group-item">{item.album.name}</li>
        ))
    }

    showContent(id, type) {
        this.props.getAudiophileContent(id, type);
    }

    followAudiophile(id, username) {
        this.props.followAudiophile(id, username);
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    {/*<div className="col-12 bg-dark text-white rounded mt-2">*/}
                        {/*<p className="lead"><h3>All Audiophiles</h3></p>*/}
                    {/*</div>*/}
                    <h1 className="display-3">All Audiophiles</h1>
                    <hr className="my-2"/>
                    <div className="p-3  bg-white rounded">
                        {this.renderAudiophiles()}
                    </div>
                </Jumbotron>
            </div>
        )
    }
};
