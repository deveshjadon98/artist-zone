import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SearchResult.css';
import AboutArtist from './../AboutArtist/AboutArtist';
import EventList from './../EventList/EventList';

export class SearchResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <section
        className="artist-search-result"
        data-test="artist-search-result">
        <AboutArtist artist={this.props.artist} />
        <div
          className="artist-events-container"
          data-test="artist-events-container">
          <EventList events={this.props.events} />
        </div>
      </section>
    );
  }
}

SearchResult.propTypes = {
  artist: PropTypes.object,
  events: PropTypes.array,
};

export default withRouter(SearchResult);
