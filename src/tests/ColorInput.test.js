import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import ColorInput from '../components/ColorInput';

describe('ColorInput', () => {
  let wrapper;

  const aubergine = [
    '#3F0E40',
    '#350d36',
    '#1164A3',
    '#FFFFFF',
    '#350D36',
    '#FFFFFF',
    '#2BAC76',
    '#CD2553'
  ];

  beforeEach(() => {
    wrapper = shallow(<ColorInput theme={aubergine}/>);
  })

  it('render <ColorInput>', () => {
    expect(wrapper).toBeDefined();
  })

  it('renders the color input title properly', () => {
    expect(wrapper.find('.color-input-title').text()).toEqual('Copy and paste these values to share your custom theme with others');
  })

  it('renders the current theme in the input box', () => {
    wrapper = mount(<ColorInput theme={aubergine}/>);
    const input = wrapper.find('.color-input-box');
    expect(input.props().value).toEqual(["#3F0E40", "#350d36", "#1164A3", "#FFFFFF", "#350D36", "#FFFFFF", "#2BAC76"
    , "#CD2553"]);
  })
});