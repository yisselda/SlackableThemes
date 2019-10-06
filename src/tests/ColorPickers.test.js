import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import ColorPickers from '../components/ColorPickers';

describe('ColorPickers', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ColorPickers/>);
  })

  it('render <ColorPickers>', () => {
    expect(wrapper).toBeDefined();
  })
});