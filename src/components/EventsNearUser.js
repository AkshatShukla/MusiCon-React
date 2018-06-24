import React from 'react'
import SearchServiceClient from "../services/search.service.client";
import * as actions from '../actions';

export default class EventsNearUser extends React.Component{
    constructor(props){
        super(props);
        this.props.searchEventsForUser();
    }
    render() {
        return (
            <div>
                <h1>Events Near User</h1>
                {console.log(this.props.events)}
            </div>
        )
    }
}