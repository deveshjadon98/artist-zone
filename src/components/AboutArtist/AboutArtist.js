import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './AboutArtist.css';
import fbLogo from './../../facebook.svg';

class AboutArtist extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const artist = this.props.artist;
    return (
        <section className="artist-info" data-test="artist-info">
            <div className="artist-info-image-wrapper" data-test="artist-info-image-wrapper">
                <img data-test="artist-info-image" src={artist.thumb_url ? artist.thumb_url : "https://s3.amazonaws.com/bit-photos/artistThumb.jpg"} alt={artist.name} />
            </div>
            <div data-test="artist-info-name" className="artist-info-name">
                <h1>{artist.name}</h1> 
            </div>
            <div data-test="artist-info-tracker" className="artist-info-tracker">
                <span data-test="artist-info-tracker-count" className="artist-info-tracker-count">{artist.tracker_count} Trackers</span>
                <a data-test="artist-fb-link" href={artist.facebook_page_url}>
                <img
                    src={fbLogo}
                    data-test="fb-logo"
                />
                </a>
            </div>
        </section>
    );
  }
}

AboutArtist.propTypes = {
    artist: PropTypes.object
};

export default withRouter(AboutArtist);
