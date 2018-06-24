import React from 'react'
import {Link} from 'react-router-dom';
import {Button, Jumbotron} from 'reactstrap';
import FollowedArtistItem from './FollowedArtistItem';

class FollowedArtists extends React.Component {

    constructor(props) {
        super(props);
        this.props.fetchFollowedArtists();
    }

    showArtists() {
        console.log(this.props.followedArtists);
        return this.props.followedArtists.map((followedArtist) => (
            <div className="col-sm-3"
                 key={followedArtist._id}>
                <FollowedArtistItem artist={followedArtist}
                                    unfollowArtist={this.props.unfollowArtist}/>
            </div>
        ))
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Artists Followed</h1>
                    <p className="lead">All the music artists you love songs of</p>
                    <hr className="my-2"/>
                    <Link style={{display: 'block', height: '100%'}}
                          to="/my-page">
                        <Button><span>
                    <i className="fa fa-arrow-left">&nbsp;</i>
                </span>My Page</Button>
                    </Link>
                    <div className="card-deck row">
                        {this.showArtists()}
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default FollowedArtists;