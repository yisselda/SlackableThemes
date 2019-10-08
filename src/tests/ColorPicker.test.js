import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';


describe('ColorPicker', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ColorPicker/>);
  })

  it('render <ColorPicker>', () => {
    expect(wrapper).toBeDefined();
  })
});