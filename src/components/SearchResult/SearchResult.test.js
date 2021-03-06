import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils/testUtils';
import { SearchResult } from './SearchResult';

const defaultProps = {
  artist: {},
  events: [],
};

/**
 * Factory function to create a ShallowWrapper for the SearchResult component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SearchResult {...setupProps} />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

describe('SearchResult', () => {
  let wrapper;
  const artist = {
    facebook_page_url: 'https://www.facebook.com/pages/ma/278525288851443',
    id: '139493',
    image_url: 'https://s3.amazonaws.com/bit-photos/large/170874.jpeg',
    mbid: '696c17e2-ef3d-4a47-a672-6aa89eab7af0',
    name: 'Ma',
    thumb_url: 'https://s3.amazonaws.com/bit-photos/thumb/170874.jpeg',
    tracker_count: 1243,
    upcoming_event_count: 12,
    url: 'https://www.bandsintown.com/a/139493?came_from=267&app_id=app_id',
  };
  const events = [
    {
      offers: [
        {
          type: 'Tickets',
          url:
            'https://www.bandsintown.com/t/1011359000?app_id=app_id&came_from=267',
          status: 'available',
        },
      ],
      venue: {
        name: 'Kauz',
        country: 'Switzerland',
        region: '',
        city: 'Zrich',
        latitude: '47.381527',
        longitude: '8.5370931',
      },
      datetime: '2018-09-07T21:00:00',
      on_sale_datetime: '',
      description: '',
      lineup: ['Ma'],
      id: '1011359000',
      artist_id: '139493',
      url:
        'https://www.bandsintown.com/e/1011359000?app_id=app_id&came_from=267',
    },
  ];

  beforeEach(() => {
    wrapper = setup({ artist: artist, events: events });
  });

  test('renders search result component without crashing', () => {
    const searchResult = findByTestAttr(wrapper, 'artist-search-result');
    expect(searchResult.length).toBe(1);
  });

  test('renders artist-events-container', () => {
    const eventsContainer = findByTestAttr(wrapper, 'artist-events-container');
    expect(eventsContainer.length).toBe(1);
  });
});
