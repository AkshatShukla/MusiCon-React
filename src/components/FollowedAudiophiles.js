import React from 'react'
import {Link} from 'react-router-dom';
import {Button, Jumbotron} from 'reactstrap';
import FollowedAudiophileItem from "./FollowedAudiophileItem";

class FollowedAudiophiles extends React.Component {

    constructor(props) {
        super(props);
        this.props.fetchFollowedAudiophiles('audiophile');
    }

    showAudiophiles() {
        console.log(this.props.followedAudiophiles);
        return this.props.followedAudiophiles.map((followedAudiophile) => (
            <div className="col-sm-3"
                 key={followedAudiophile._id}>
                <FollowedAudiophileItem audiophile={followedAudiophile}
                                        unfollowAudiophile={this.props.unfollowAudiophile}/>
            </div>
        ))
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Audiophiles Followed</h1>
                    <p className="lead">All the audiophiles you currently follow</p>
                    <hr className="my-2"/>
                    <Link style={{display: 'block', height: '100%'}}
                          to="/my-page">
                        <Button><span>
                    <i className="fa fa-arrow-left">&nbsp;</i>
                </span>My Page</Button>
                    </Link>
                    <div className="card-deck row">
                        {this.showAudiophiles()}
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default FollowedAudiophiles;