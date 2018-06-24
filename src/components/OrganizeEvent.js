import React from 'react'
import EventContainer from '../containers/EventContainer';
import {Jumbotron} from 'reactstrap';

const OrganizeEvent = ({username, textChanged, createEvent}) => {
    let inputElem;
    let inputElem1;
    let inputElem2;

    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Manage Concerts</h1>
                <p className="lead">All your concert management in one place!</p>
                <hr className="my-2"/>
                <p className="lead"><h3>Create New Event</h3></p>
                <form className="form-inline">
                    <label htmlFor="eventName">Enter Event name:</label>
                    &nbsp;
                    <input className="col-8"
                           id="eventName"
                           onChange={() => textChanged('eventName', inputElem.value)}
                           ref={node => inputElem = node}/>
                </form>
                <br/>

                <form className="form-inline">
                    <label htmlFor="venueName">Enter Venue Location:</label>
                    &nbsp;
                    <input className="col-8"
                           id="venueName"
                           onChange={() => textChanged('venueName', inputElem1.value)}
                           ref={node => inputElem1 = node}/>
                </form>
                <br/>

                <form className="form-inline">
                    <label htmlFor="eventDate">Enter Event Date:</label>
                    &nbsp;
                    <input className="col-8"
                           id="eventDate"
                           type='date'
                           onChange={() => textChanged('eventDate', inputElem2.value)}
                           ref={node => inputElem2 = node}/>
                </form>

                <button onClick={() => createEvent(inputElem.value, inputElem1.value, inputElem2.value)}>
                    Create Event
                </button>
                <hr className="my-2"/>
                <p className="lead"><h3>Your Concerts</h3></p>
                <EventContainer/>
            </Jumbotron>
        </div>
    )
};

export default OrganizeEvent;