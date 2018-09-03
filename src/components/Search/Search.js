import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        query: ''
    }
  }

  requestArtist = (query) => {
    this.setState({query: query});
    this.props.requestArtist(query);
  }

  searchArtist = (event) => {
    event.preventDefault();
    this.props.requestArtist(this.state.query);
  }

  render() {
    return (
        <div className="search" data-test="search">
            <form className="search-form" onSubmit={this.searchArtist} data-test="search-form">
                <input type="text" data-test="search-query" value={this.state.query} placeholder="Search for artists.." onChange={(e) => this.requestArtist(e.target.value)}/>
                <input type="submit" data-test="search-button" value="Search" />
            </form>
        </div>
    );
  }
}

Search.propTypes = {
    requestArtist: PropTypes.func
};

export default Search;
