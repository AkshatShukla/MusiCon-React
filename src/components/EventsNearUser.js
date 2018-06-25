import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Jumbotron} from 'reactstrap';
import LocalEventItem from "./LocalEventItem";
import TicketMasterEventItem from "./TicketMasterEventItem";

export default class EventsNearUser extends React.Component {

    constructor(props) {
        super(props);
        this.props.searchEventsForUser();
    }

    showLocalConcerts() {
        if (this.props.events.lr !== undefined) {
            return this.props.events.lr.map((event) => (
                <div className="col-sm-3"
                     key={event._id}>
                    <LocalEventItem event={event}/>
                </div>
            ))
        }
    }

    showTicketMasterConcerts() {
        if (this.props.events.tn !== undefined) {
            return this.props.events.tn.map((event) => (
                <div className="col-sm-3"
                     key={event._id}>
                    <TicketMasterEventItem event={event}/>
                </div>
            ))
        }
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Concerts Near You</h1>
                    <hr className="my-2"/>
                    <Link style={{display: 'block', height: '100%'}}
                          to="/my-page">
                        <Button>
                            <span><i className="fa fa-arrow-left">&nbsp;</i></span>
                            My Page
                        </Button>
                    </Link>
                    <hr className="my-2"/>
                    <h3 className="lead">Local Concerts</h3>
                    <div className="card-deck row">
                        {this.showLocalConcerts()}
                    </div>
                    <hr className="my-2"/>
                    <h3 className="lead">Ticket Master Concerts</h3>
                    <div className="card-deck row">
                        {this.showTicketMasterConcerts()}
                    </div>
                </Jumbotron>
            </div>
        )
    }
}