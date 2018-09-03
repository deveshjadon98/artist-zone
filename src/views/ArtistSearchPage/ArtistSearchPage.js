import React from 'react';
import { connect } from 'react-redux';
import { artistActionCreator } from './../../actions';
import ArtistSearch from './../../components/ArtistSearch/ArtistSearch';
import { withRouter } from 'react-router-dom';

export class ArtistSearchPage extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getDataFromDB();
  }

  render() {
    return (
      <ArtistSearch 
        artist={this.props.artist} 
        events={this.props.events}
        requestArtist={(query) => this.props.requestArtist(query)} 
        requestEvents={(query) => this.props.requestEvents(query)}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    artist: state.artist.artist,
    events: state.artist.events ? state.artist.events : []
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestArtist: (query) => dispatch(artistActionCreator.requestArtist(query)),
    requestEvents: (query) => dispatch(artistActionCreator.requestEvents(query)),
    getDataFromDB: () => dispatch(artistActionCreator.getDataFromDB())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ArtistSearchPage));
