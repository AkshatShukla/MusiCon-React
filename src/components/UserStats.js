import React from 'react'
import {Link} from 'react-router-dom';
import {
    Jumbotron, Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
} from 'reactstrap';
import like from '../images/facebook_like.png';

const UserStats = ({username}) => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">{username}'s Page</h1>
                <p className="lead">All the good stuff you've been upto on MusiCon.</p>
                <hr className="my-2"/>
                <p>
                    <CardColumns>
                        <Card>
                            <CardImg top width="100%" src={like} alt="Card image cap"/>
                            <CardBody>
                                <CardTitle><h2>Liked Albums</h2></CardTitle>
                                <CardSubtitle>The albums you love!</CardSubtitle>
                                <CardText>Click on the button below to show all the albums you love.</CardText>
                                <Link style={{display: 'block', height: '100%'}}
                                      to="/my-page/liked-albums">
                                    <Button>Show</Button>
                                </Link>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%"
                                     src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                     alt="Card image cap"/>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>This card has supporting text below as a natural lead-in to additional
                                    content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                        <Card body inverse style={{backgroundColor: '#333', borderColor: '#333'}}>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Button</Button>
                        </Card>
                        <Card>
                            <CardImg top width="100%" src={like} alt="Card image cap"/>
                            <CardBody>
                                <CardTitle><h2>Liked Tracks</h2></CardTitle>
                                <CardSubtitle>The tracks you love!</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to show that
                                    equal height action.</CardText>
                                <Link style={{display: 'block', height: '100%'}}
                                      to="/my-page/liked-tracks">
                                    <button className="btn btn-dark">Show</button>
                                </Link>
                            </CardBody>
                        </Card>
                        <Card body inverse color="primary">
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button color="secondary">Button</Button>
                        </Card>
                    </CardColumns>
                </p>
            </Jumbotron>
        </div>
    )
};

export default UserStats;