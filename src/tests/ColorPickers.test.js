import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import ColorPickers from '../components/ColorPickers';

Enzyme.configure({ adapter: new Adapter() });

describe('ColorPickers', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ColorPickers/>);
  })

  it('render <ColorPickers>', () => {
    expect(wrapper).toBeDefined();
  })
});