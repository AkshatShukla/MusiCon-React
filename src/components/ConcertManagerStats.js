import React from 'react'
import {Link} from 'react-router-dom';
import {
    Jumbotron, Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
} from 'reactstrap';
import createEvent from '../images/create-event.jpg';

const ConcertManagerStats = ({username, description}) => {
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
                            <CardImg top width="100%" src={createEvent} alt="Card image cap"/>
                            <CardBody>
                                <CardTitle className="h2">Create Concert</CardTitle>
                                <CardSubtitle>Make new events and reach your audience!</CardSubtitle>
                                <CardText>Click on the button below to create new concert/event.</CardText>
                                <Link style={{display: 'block', height: '100%'}}
                                      to="/my-page-manager/create-event">
                                    <Button >Create</Button>
                                </Link>
                            </CardBody>
                        </Card>
                    </CardColumns>
                </p>
            </Jumbotron>
        </div>
    )
};

export default ConcertManagerStats;