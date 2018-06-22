import React from 'react'
import EventContainer from '../containers/EventContainer';

const OrganizeEvent = ({textChanged, createEvent}) => {
    let inputElem;
    let inputElem1;
    let inputElem2;

    return (
        <div>
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
                       onChange={() => textChanged('eventDate', inputElem2.value)}
                       ref={node => inputElem2 = node}/>
            </form>

            <button onClick={() => createEvent(inputElem.value, inputElem1.value, inputElem2.value)}>
                Create Event
            </button>

            <EventContainer/>

        </div>)
}

export default OrganizeEvent;