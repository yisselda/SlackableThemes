import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import DashBoard from '../components/DashBoard';

describe('DashBoard', () => {
  let wrapper;

  const aubergine = [
    '#3F0E40',
    '#350d36',
    '#1164A3',
    '#FFFFFF',
    '#350D36',
    '#FFFFFF',
    '#2BAC76',
    '#CD2553'
  ]

  beforeEach(() => {
    wrapper = shallow(<DashBoard theme={aubergine}/>);
  })

  it('renders properly', () => {
    expect(wrapper).toBeDefined();
  })
});