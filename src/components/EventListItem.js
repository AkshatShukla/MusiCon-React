import React from 'react'

const EventListItem = ({event, deleteEvent}) => {
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded " >
            <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <h6>{event.location}</h6>
            </div>
            <div className="card-footer">
                <small className="text-muted">Date: {event.date.substr(0, 10)}</small>
            </div>
            <button className='btn' onClick={() => deleteEvent(event)}>Delete</button>
        </div>
    )
};

export default EventListItem;