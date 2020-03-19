/**
 * @format
 */

import React from 'react';
import Login from '../src/pages/login';
import {mount, shallow} from 'enzyme';
// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const wrapper = shallow(<Login />);

  expect(wrapper.find('Container').exists()).toBe(true);
});
