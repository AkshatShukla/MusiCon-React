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
                <div className="col-12 bg-dark text-white rounded">
                <p className="lead"><h3>Create New Event</h3></p>
                </div>
                <div className="cardRegistration card-container container-fluid rounded">
                    <form className="form-inline m-2">
                        <label htmlFor="eventName" className='col-2'>Enter Event name:</label>
                        &nbsp;
                        <input className="col-9"
                               id="eventName"
                               onChange={() => textChanged('eventName', inputElem.value)}
                               ref={node => inputElem = node}/>
                    </form>
                    <br/>

                    <form className="form-inline m-2">
                        <label htmlFor="venueName" className='col-2'>Enter Venue Location:</label>
                        &nbsp;
                        <input className="col-9"
                               id="venueName"
                               onChange={() => textChanged('venueName', inputElem1.value)}
                               ref={node => inputElem1 = node}/>
                    </form>
                    <br/>

                    <form className="form-inline m-2">
                        <label htmlFor="eventDate" className='col-2'>Enter Event Date:</label>
                        &nbsp;
                        <input className="col-9"
                               id="eventDate"
                               type='date'
                               onChange={() => textChanged('eventDate', inputElem2.value)}
                               ref={node => inputElem2 = node}/>
                    </form>
                    <button onClick={() => createEvent(inputElem.value, inputElem1.value, inputElem2.value)}
                            className='btn btn-primary btn-block'>
                        Create Event
                    </button>
                </div>
                <hr className="my-2"/>
                <div className="col-12 bg-dark text-white rounded">
                <p className="lead"><h3>Your Concerts</h3></p>
                </div>
                <EventContainer/>
            </Jumbotron>
        </div>
    )
};

export default OrganizeEvent;