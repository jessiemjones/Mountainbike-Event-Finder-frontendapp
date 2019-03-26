import React, { Component } from 'react';
import Eventcard from './Eventcard';
import {withEvents} from '../EventProvider';
import Form from '../Form'

class Listpage extends Component {
 
    render() {
        let {mimickedEvents, selectedState} = this.props
        let newArray = mimickedEvents.filter(event => event.EventState === selectedState)
        let mappedEvents = newArray.map(event => <Eventcard key={event.EventId} event={event} newArray={newArray} button={<button className="saveButton" onClick={() => this.props.makeSaved(event.EventId)}>{event.isSaved ? 'Unsave' : 'Save'}</button>} />)

        return (
            <div className="listpage-wrapper pages">
                <Form />
                {newArray.length > 0 ?
                <div> 
                {mappedEvents}
                </div>
                :
                <div className="eventCard">
                    <p>Sorry!  There are no events in this state.</p>
                </div>
                }
            </div>
        );
    }
}

export default withEvents(Listpage);