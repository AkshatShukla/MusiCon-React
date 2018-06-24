import * as actions from "../actions";
import * as constants from '../constants'

let _singleton = Symbol();

class EventServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new EventServiceClient(_singleton);
        return this[_singleton]
    }

    createEvent(eventName, venueName, eventDate){
        var event = {
            eventName: eventName,
            venueName: venueName,
            eventDate: eventDate
        };
        return fetch(constants.BASE_URL + 'event', {
            method: 'post',
            body: JSON.stringify(event),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    findAllEventOFUser(){
        return fetch(constants.BASE_URL + 'events',{
            credentials: "include"
        })
    }

    deleteEvent(eventId){
        return fetch(constants.BASE_URL + 'event/' + eventId,{
            method: 'delete',
            credentials: "include"
        })
    }

    getArtistsInEvent(eventId) {
        return fetch(constants.BASE_URL + 'event/' + eventId + '/artists')
    }

    addArtistToEvent(event, artist) {
        return fetch(constants.BASE_URL + 'event/' + event._id + '/addartist', {
            method: 'post',
            body: JSON.stringify(artist),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    deleteArtistFromEvent(event, artist) {
        return fetch(constants.BASE_URL + 'event/' + event._id + '/artist/' + artist._id, {
            method: 'delete',
            credentials: "include",
        })
    }
    findEventsForUser(){
        return fetch(constants.BASE_URL + 'events/nearby' , {
            method: 'get',
            credentials: "include",
        })

    }
}

export default EventServiceClient;