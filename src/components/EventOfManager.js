import React from 'react'
import EventListItem from "./EventListItem";


export default class EventOfManager extends React.Component {

    constructor(props) {
        super(props)
        this.props.findAllEventOFUser();
    }

    renderList(events){
        return events.map(event =>
            <div className="col-sm-3">
                <EventListItem
                    event={event}
                    deleteEvent={this.props.deleteEvent}
                    getArtistsInEvent={this.props.getArtistsInEvent}
                    artists={this.props.artists}/>
            </div>
        )
    }

    render () {
        return (
            <div className="card-deck row">
                {this.renderList(this.props.events)}
            </div>
        )
    }
}
