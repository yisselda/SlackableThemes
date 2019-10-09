import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from '../components/ColorPicker';


describe('<ColorPicker />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ColorPicker label="Color Picker"/>);
  })

  it('renders properly', () => {
    expect(wrapper).toBeDefined();
  })

  it('renders with the correct label', () => {
    expect(wrapper.contains(<span className="label">Color Picker</span>)).toEqual(true);
  })
});