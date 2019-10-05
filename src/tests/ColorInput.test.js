import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import ColorInput from '../components/ColorInput';

describe('ColorInput', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ColorInput/>);
  })

  it('render <ColorInput>', () => {
    expect(wrapper).toBeDefined();
  })
});