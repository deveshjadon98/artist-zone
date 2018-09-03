import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../../utils/testUtils';
import ArtistSearchPage from './ArtistSearchPage';

/**
 * @function setup
 * @param {object} initialState - initial State for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<ArtistSearchPage store={store} />).dive();
  return wrapper;
};

describe('redux properties', () => {
  test('has access to `events` state', () => {
    const events = [];
    const artist = {}
    const wrapper = setup({ artist: artist, events: events });
    const eventsProp = wrapper.instance().props.events;
    expect(eventsProp).toBe(events);
  });
});
