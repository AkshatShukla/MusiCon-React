import React from 'react'
import {Link} from 'react-router-dom';
import {Button, Jumbotron} from 'reactstrap';
import LikedTrackItem from './LikedTrackItem';

class LikedTracks extends React.Component {

    constructor(props) {
        super(props);
        this.props.fetchLikedTrack();
    }

    showTracks() {
        return this.props.likedTracks.map((track) => (
            <div className="col-sm-3"
                 key={track._id}>
                <LikedTrackItem track={track}
                                dislikeTrack={this.props.dislikeTrack}/>
            </div>
        ))
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Liked Tracks</h1>
                    <p className="lead">All the tracks you love listening to</p>
                    <hr className="my-2"/>
                    <Link style={{display: 'block', height: '100%'}}
                          to="/my-page">
                        <Button><span>
                    <i className="fa fa-arrow-left">&nbsp;</i>
                </span>My Page</Button>
                    </Link>
                    <div className="card-deck row">
                        {this.showTracks()}
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default LikedTracks;