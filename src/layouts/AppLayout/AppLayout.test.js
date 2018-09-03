import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils/testUtils';
import AppLayout from './AppLayout';

/**
 * Factory function to create a ShallowWrapper for the AppLayout component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<AppLayout {...props} />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

test('renders without crashing', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders app-layout', () => {
  const wrapper = setup();
  const appLayout = findByTestAttr(wrapper, 'app-layout');
  expect(appLayout.length).toBe(1);
});

test('renders main-panel', () => {
  const wrapper = setup();
  const mainPanel = findByTestAttr(wrapper, 'main-panel');
  expect(mainPanel.length).toBe(1);
});

test('renders main-panel-pages', () => {
  const wrapper = setup();
  const mainPanelPages = findByTestAttr(wrapper, 'main-panel-pages');
  expect(mainPanelPages.length).toBe(1);
});
