import React from 'react'
import {Link} from 'react-router-dom';
import {
    Jumbotron, Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
} from 'reactstrap';
import likedAlbum from '../images/facebook_like.png';
import likedTrack from '../images/track-liked.png';

const AudiophileStats = ({username, description}) => {
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
                        <Card body inverse style={{backgroundColor: '#505050', borderColor: '#575757'}}>
                            <CardImg top width="100%" src={likedAlbum} alt="Card image cap"/>
                            <CardBody>
                                <CardTitle className="h2">Albums Recommended</CardTitle>
                                <CardSubtitle>The albums you love!</CardSubtitle>
                                <CardText>Click on the button below to show all the albums you love.</CardText>
                                <Link style={{display: 'block', height: '100%'}}
                                      to="/my-page-audiophile/recommended-albums">
                                    <Button>Show</Button>
                                </Link>
                            </CardBody>
                        </Card>
                        <Card body inverse style={{backgroundColor: '#333', borderColor: '#333'}}>
                            <CardImg top width="100%" src={likedTrack} alt="Card image cap"/>
                            <CardBody>
                                <CardTitle className="h2">Tracks Recommended</CardTitle>
                                <CardSubtitle>The artists you follow!</CardSubtitle>
                                <CardText>Click on the button below to show all the artists you've been
                                    following</CardText>
                                <Link style={{display: 'block', height: '100%'}}
                                      to="/my-page-audiophile/recommended-tracks">
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

export default AudiophileStats;