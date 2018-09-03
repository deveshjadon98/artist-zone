import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils/testUtils';
import Search from './Search';

const defaultProps = {
  requestArtist: jest.fn()
};

/**
 * Factory function to create a ShallowWrapper for the Search component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Search {...setupProps} />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders search component without crashing', () => {
    const search = findByTestAttr(wrapper, 'search');
    expect(search.length).toBe(1);
  });

  test('renders search-form', () => {
    const searchForm = findByTestAttr(wrapper, 'search-form');
    expect(searchForm.length).toBe(1);
  });

  test('renders search-query', () => {
    const searchQuery = findByTestAttr(wrapper, 'search-query');
    expect(searchQuery.length).toBe(1);
  });

  test('renders search-button', () => {
    const searchButton = findByTestAttr(wrapper, 'search-button');
    expect(searchButton.length).toBe(1);
  });
});
