import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils/testUtils';
import Event from './Event';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the Event component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Event {...setupProps} />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

describe('Event', () => {
  let wrapper;
  const event = {
        offers:[
            {
                type:"Tickets",
                url:"https:\/\/www.bandsintown.com\/t\/1011359000?app_id=app_id&came_from=267",
                status:"available"
            }
        ],
        venue:{
            name:"Kauz","country":"Switzerland",
            region:"",
            city:"Zrich",
            latitude:"47.381527",
            longitude:"8.5370931"
        },
        datetime:"2018-09-07T21:00:00",
        on_sale_datetime:"",
        description:"",
        lineup:["Ma"],
        id:"1011359000",
        artist_id:"139493",
        url:"https:\/\/www.bandsintown.com\/e\/1011359000?app_id=app_id&came_from=267"
    }

  beforeEach(() => {
    wrapper = setup({event: event});
  });

  test('renders artist-event component without crashing', () => {
    const event = findByTestAttr(wrapper, 'artist-event');
    expect(event.length).toBe(1);
  });

  test('renders event-date', () => {
    const eventDate = findByTestAttr(wrapper, 'event-date');
    expect(eventDate.length).toBe(1);
  });

  test('renders event-month', () => {
    const eventMonth = findByTestAttr(wrapper, 'event-month');
    expect(eventMonth.length).toBe(1);
  });

  test('renders event-day component without crashing', () => {
    const eventDay = findByTestAttr(wrapper, 'event-day');
    expect(eventDay.length).toBe(1);
  });

  test('renders event-location', () => {
    const eventLocation = findByTestAttr(wrapper, 'event-location');
    expect(eventLocation.length).toBe(1);
  });

  test('renders event-city', () => {
    const eventCity = findByTestAttr(wrapper, 'event-city');
    expect(eventCity.length).toBe(1);
  });

  test('renders event-venue', () => {
    const eventVenue = findByTestAttr(wrapper, 'event-venue');
    expect(eventVenue.length).toBe(1);
  });
});
