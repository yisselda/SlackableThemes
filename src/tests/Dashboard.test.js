import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import DashBoard from '../components/DashBoard';
import presetThemes from '../data/preset-themes';


describe('DashBoard', () => {
  let wrapper;

  const aubergine = presetThemes[0].themeColor;
  const lastTheme = presetThemes[8].themeColor;

  beforeEach(() => {
    wrapper = shallow(<DashBoard theme={aubergine}/>);
  })

  it('renders properly', () => {
    expect(wrapper).toBeDefined();
  })
});