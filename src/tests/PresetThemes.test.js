import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import PresetThemes from '../components/PresetThemes';

describe('PresetThemes', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PresetThemes/>);
  })

  it('render <PresetThemes>', () => {
    expect(wrapper).toBeDefined();
  })
});