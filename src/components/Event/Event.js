import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './Event.css';

export class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    };
  }

  render() {
    const event = this.props.event;
    const eventDate = new Date(event.datetime);
    return (
      <li key={event.id} className="artist-event" data-test="artist-event">
        <span className="event-date" data-test="event-date">
          <span className="event-month" data-test="event-month">
            {this.state.months[eventDate.getMonth()]}
          </span>
          <span className="event-day" data-test="event-day">
            {eventDate.getDate()}
          </span>
        </span>
        <div className="event-location" data-test="event-location">
          <div className="event-city" data-test="event-city">
            <span>
              {event.venue.city}, {event.venue.country}
            </span>
          </div>
          <div className="event-venue" data-test="event-venue">
            <span>{event.venue.name}</span>
          </div>
        </div>
      </li>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object,
};

export default withRouter(Event);
