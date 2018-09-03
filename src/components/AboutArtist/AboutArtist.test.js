import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils/testUtils';
import AboutArtist from './AboutArtist';

const defaultProps = {
  artist: {}
};

/**
 * Factory function to create a ShallowWrapper for the AboutArtist component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<AboutArtist {...setupProps} />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

describe('AboutArtist', () => {
  let wrapper;
  const artist = {
    facebook_page_url:"https://www.facebook.com/pages/ma/278525288851443",
    id:"139493",
    image_url:"https://s3.amazonaws.com/bit-photos/large/170874.jpeg",
    mbid:"696c17e2-ef3d-4a47-a672-6aa89eab7af0",
    name:"Ma",
    thumb_url:"https://s3.amazonaws.com/bit-photos/thumb/170874.jpeg",
    tracker_count:1243,
    upcoming_event_count:12,
    url:"https://www.bandsintown.com/a/139493?came_from=267&app_id=app_id"
  }

  beforeEach(() => {
    wrapper = setup({artist: artist});
  });

  test('renders artist-info component without crashing', () => {
    const aboutArtist = findByTestAttr(wrapper, 'artist-info');
    expect(aboutArtist.length).toBe(1);
  });

  test('renders artist-info-image-wrapper', () => {
    const imageWrapper = findByTestAttr(wrapper, 'artist-info-image-wrapper');
    expect(imageWrapper.length).toBe(1);
  });

  test('renders artist-info-image', () => {
    const artistImage = findByTestAttr(wrapper, 'artist-info-image');
    expect(artistImage.length).toBe(1);
  });

  test('renders artist-info-name component without crashing', () => {
    const artistName = findByTestAttr(wrapper, 'artist-info-name');
    expect(artistName.length).toBe(1);
  });

  test('renders artist-info-tracker', () => {
    const infoTracker = findByTestAttr(wrapper, 'artist-info-tracker');
    expect(infoTracker.length).toBe(1);
  });

  test('renders artist-info-tracker-count', () => {
    const trackerCount = findByTestAttr(wrapper, 'artist-info-tracker-count');
    expect(trackerCount.length).toBe(1);
  });

  test('renders artist-fb-link', () => {
    const fbLink = findByTestAttr(wrapper, 'artist-fb-link');
    expect(fbLink.length).toBe(1);
  });
});
