import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Event from './../Event/Event';
import './EventList.css';

export class EventList extends Component {
  constructor(props) {
    super(props);
  }

  prepareEvents = events => {
    return events.map(event => {
      let eventDate = new Date(event.datetime);
      return <Event key={event.id} event={event} />;
    });
  };

  render() {
    const events = this.prepareEvents(this.props.events);
    return (
      <ul className="artist-event-list" data-test="artist-event-list">
        {events.length > 0 ? (
          events
        ) : (
          <li className="no-events">No Future Events</li>
        )}
      </ul>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.array,
};

export default withRouter(EventList);
