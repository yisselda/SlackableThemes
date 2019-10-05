import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import ColorsInput from '../components/ColorsInput';

Enzyme.configure({ adapter: new Adapter() });

describe('ColorsInput', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ColorsInput/>);
  })

  it('render <ColorsInput>', () => {
    expect(wrapper).toBeDefined();
  })
});