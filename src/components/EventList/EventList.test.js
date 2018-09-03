import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils/testUtils';
import { EventList } from './EventList';

const defaultProps = {
  events: [],
};

/**
 * Factory function to create a ShallowWrapper for the EventList component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<EventList {...setupProps} />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

describe('EventList', () => {
  let wrapper;
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
    wrapper = setup({ events });
  });

  test('renders artist-event-list component without crashing', () => {
    const eventList = findByTestAttr(wrapper, 'artist-event-list');
    expect(eventList.length).toBe(1);
  });
});
