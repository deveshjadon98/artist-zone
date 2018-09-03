import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ArtistSearch.css';
import Search from './../Search/Search';
import Loader from './../Loader/Loader';
import SearchResult from './../SearchResult/SearchResult';

class ArtistSearch extends Component {
  constructor(props) {
    super(props);
  }

  requestArtist = (query) => {
    // debugger
    this.props.requestArtist(query)
  }
  render() {
    return (
      <section className="artist-search-container" data-test="artist-search-container">
        <article className="artist-search-query-container" data-test="artist-search-query-container">
          <Search requestArtist={(query) => this.requestArtist(query)}/>
        </article>
        <article className="artist-search-result-container" data-test="artist-search-result-container">
          { this.props.artist ? ( this.props.artist.id ? <SearchResult artist={this.props.artist} events={this.props.events}/> : <Loader />): 'No Result'}
        </article>        
      </section>
    );
  }
}

ArtistSearch.propTypes = {
  artist: PropTypes.object,
  events: PropTypes.array,
  requestArtist: PropTypes.func,
  requestEvents: PropTypes.func,
};

export default ArtistSearch;
