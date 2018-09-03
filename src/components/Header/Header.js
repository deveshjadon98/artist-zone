import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Header.css';
import logo from './../../music-cd.svg';

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  redirectToSearchArtist = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <header className="app-header" data-test="component-header">
        <div className="links-container" data-test="header-links-container">
          <div className="logo-wrapper" data-test="header-logo-wrapper">
            <a
              className="logo-link"
              onClick={() => this.redirectToSearchArtist()}
              target="_self"
              data-test="header-logo-link">
              <img
                className="app-logo"
                src={logo}
                alt="Artist Zone Logo"
                data-test="header-app-logo"
              />
            </a>
          </div>
          {/* <div
            className="artists-container"
            data-test="header-artists-container">
            <a
              onClick={() => this.redirectToSearchArtist()}
              target="_self"
              className="artists-link"
              data-test="header-artists-link">
              <span className="artists-tag" data-test="header-artists-tag">
                <span>artists</span>
              </span>
            </a>
          </div> */}
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
