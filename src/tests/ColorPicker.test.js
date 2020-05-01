import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from '../components/ColorPicker';


describe('<ColorPicker />', () => {
  let wrapper;

  const testColor = "#3F0E40";

  beforeEach(() => {
    wrapper = shallow(<ColorPicker label="Color Picker" color={testColor} />);
  })

  it('renders properly', () => {
    expect(wrapper).toBeDefined();
  })

  it('renders with the correct label', () => {
    expect(wrapper.contains(<span className="label">Color Picker</span>)).toEqual(true);
  })
});