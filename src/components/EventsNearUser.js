import React from 'react'
import SearchServiceClient from "../services/search.service.client";
import * as actions from '../actions';

export default class EventsNearUser extends React.Component{
    constructor(props){
        super(props);

    }
    render() {
        return (
            <div>
                <h1>Events Near User</h1>
                {console.log(this.props.searchforEventsNearUser(this.props.city))}
                {/*{this.props.eventsNearUser.map(*/}
                    {/*event =>*/}
                        {/*<h1>event</h1>*/}

                {/*)}*/}
            </div>
        )
    }
}