import React, { Component } from 'react';
import {withEvents} from '../EventProvider';

class Eventcard extends Component {
    constructor(props){
        super(props)

        this.state = {
        }
    }

    render() {
        console.log(this.props)
        console.log(this.props.event)
        let {event} = this.props
        return (
            <div name={event.EventId} className={event.isSaved ? "eventCard saved" : "eventCard"}>
                <h1>{event.EventName}</h1>
                <p>Location: {event.EventCity}, {event.EventState}</p>
                <a className="eventLink" href={event.EventWebsite}>Link to event website</a>
                {this.props.button}  
            </div>
        );
    }
}

export default withEvents(Eventcard);