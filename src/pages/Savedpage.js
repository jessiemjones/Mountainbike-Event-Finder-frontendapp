import React, { Component } from 'react';
import Eventcard from './Eventcard';
import {withEvents} from '../EventProvider';

class SavedPage extends Component {

    render() {
        let {savedEvents} = this.props
        let mappedEvents = savedEvents.map(event => <Eventcard key={event.EventName} event={event} button={<button className="saveButton" onClick={() => this.props.makeSaved(event.EventId)}>{event.isSaved ? 'Unsave' : 'Save'}</button>} />)

        return (
            <div className="saved-wrapper pages">
                {mappedEvents}
            </div>
        );
    }
}

export default withEvents(SavedPage);