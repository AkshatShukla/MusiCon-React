import React from 'react'
import {Link} from 'react-router-dom';
import {Button, Jumbotron} from 'reactstrap';
import RecommendedTrackItem from "./RecommendTrackItem";

class RecommendedTracks extends React.Component {

    constructor(props) {
        super(props);
        this.props.fetchRecommendedTracks('track');
    }

    showRecommendedTrack() {
        return this.props.recommendedTracks.map((track) => (
            <div className="col-sm-3"
                 key={track._id}>
                <RecommendedTrackItem track={track}
                                      removeTrack={this.props.removeTrack}/>
            </div>
        ))
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Recommended Tracks</h1>
                    <p className="lead">All the tracks you have recommended!</p>
                    <hr className="my-2"/>
                    <Link style={{display: 'block', height: '100%'}}
                          to="/my-page-audiophile">
                        <Button><span>
                    <i className="fa fa-arrow-left">&nbsp;</i>
                </span>My Page</Button>
                    </Link>
                    <div className="card-deck row">
                        {this.showRecommendedTrack()}
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default RecommendedTracks;