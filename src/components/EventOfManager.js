import React from 'react'
import EventListItem from "./EventListItem";


export default class EventOfManager extends React.Component {

    constructor(props) {
        super(props);
        this.props.findAllEventOFUser();
        this.state={id:''};
        this.editEvent =this.editEvent.bind(this);
        this.updateEvent =this.updateEvent.bind(this);
        this.textChanged =this.textChanged.bind(this);
    }

    renderList(events) {
        return events.map(event =>
            <div className="col-sm-3">
                <EventListItem
                    event={event}
                    deleteEvent={this.props.deleteEvent}
                    getArtistsInEvent={this.props.getArtistsInEvent}
                    artistsInEvent={this.props.artistsInEvent}
                    toggleEvent={this.props.toggleEvent}
                    eventModalToggle={this.props.eventModalToggle}
                    deleteArtistFromEvent={this.props.deleteArtistFromEvent}
                    editEvent={this.editEvent}
                    id={this.state.id}
                    updateEvent={this.updateEvent}
                    textChanged={this.textChanged}/>
            </div>
        )
    }
    textChanged(text,type){
        if(type==='title'){this.setState({title:text});}
        else if(type==='loc'){this.setState({location:text});}

    }
    updateEvent(id){
        console.log('update event ',id)
        this.props.updateEvent({name:this.state.title,location:this.state.location,_id:this.state.id});
        this.setState({id:''})
    }
    editEvent(id){
        this.setState({id:id});
    }
    render() {
        return (
            <div className="card-deck row">
                {this.renderList(this.props.events)}
            </div>
        )
    }
}
