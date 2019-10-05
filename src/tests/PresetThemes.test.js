import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import PresetThemes from '../components/PresetThemes';

Enzyme.configure({ adapter: new Adapter() });

describe('PresetThemes', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PresetThemes/>);
  })

  it('render <PresetThemes>', () => {
    expect(wrapper).toBeDefined();
  })
});