import React from 'react'
import {Link} from 'react-router-dom';
import {
    Jumbotron, Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
} from 'reactstrap';
import likedAlbum from '../images/facebook_like.png';
import followed from '../images/artist-followed.png';
import likedTrack from '../images/track-liked.png';
import eventsNearby from '../images/create-event.jpg';

const UserStats = ({username, description}) => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">{username}'s Page</h1>
                {description !== undefined
                    ? <p className="lead">{description}</p>
                    : <p className="lead">All the good stuff you've been upto on MusiCon.</p>}
                <hr className="my-2"/>
                <p>
                    <CardColumns>
                        <Card body inverse style={{backgroundColor: '#565656', borderColor: '#4e4e4e'}}>
                            <CardImg top width="100%" src={likedAlbum} alt="Card image cap"/>
                            <CardBody>
                                <CardTitle className="h2">Albums Liked</CardTitle>
                                <CardSubtitle>The albums you love!</CardSubtitle>
                                <CardText>Click on the button below to show all the albums you love.</CardText>
                                <Link style={{display: 'block', height: '100%'}}
                                      to="/my-page/liked-albums">
                                    <Button>Show</Button>
                                </Link>
                            </CardBody>
                        </Card>
                        <Card body inverse style={{backgroundColor: '#333', borderColor: '#333'}}>
                            <CardImg top width="100%" src={followed} alt="Card image cap"/>
                            <CardBody>
                                <CardTitle className="h2">Artists Followed</CardTitle>
                                <CardSubtitle>The artists you follow!</CardSubtitle>
                                <CardText>Click on the button below to show all the artists you've been
                                    following</CardText>
                                <Link style={{display: 'block', height: '100%'}}
                                      to="/my-page/followed-artists">
                                    <Button>Show</Button>
                                </Link>
                            </CardBody>
                        </Card>
                        <Card body inverse style={{backgroundColor: '#333', borderColor: '#333'}}>
                            <CardTitle className="h2">Audiophiles Followed</CardTitle>
                            <CardSubtitle>The audiophiles you follow!</CardSubtitle>
                            <CardText>Click on the button below to show all the audiophiles you've been
                                following</CardText>
                            <Link style={{display: 'block', height: '100%'}}
                                  to="/my-page/followed-audiophiles">
                                <Button>Show</Button>
                            </Link>
                        </Card>
                        <Card body inverse style={{backgroundColor: '#333', borderColor: '#333'}}>
                            <CardImg top width="100%" src={likedTrack} alt="Card image cap"/>
                            <CardBody>
                                <CardTitle className="h2">Tracks Liked</CardTitle>
                                <CardSubtitle>The tracks you love!</CardSubtitle>
                                <CardText>Click on the button below to show all the tracks you love.</CardText>
                                <Link style={{display: 'block', height: '100%'}}
                                      to="/my-page/liked-tracks">
                                    <button type='btn' className="btn btn-dark">Show</button>
                                </Link>
                            </CardBody>
                        </Card>
                        <Card body inverse style={{backgroundColor: '#000', borderColor: '#000'}}>
                            <CardImg top width="100%" src={eventsNearby} alt="Card image cap"/>
                            <CardBody>
                                <CardTitle className="h2">Concerts Near You</CardTitle>
                                <CardSubtitle>Live concerts of artists you love near your location!</CardSubtitle>
                                <CardText>Click on the button below to show all concerts near you.</CardText>
                                <Link style={{display: 'block', height: '100%'}}
                                      to="/my-page/events-nearby">
                                    <Button>Show</Button>
                                </Link>
                            </CardBody>
                        </Card>
                    </CardColumns>
                </p>
            </Jumbotron>
        </div>
    )
};

export default UserStats;