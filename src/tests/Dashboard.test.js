import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import DashBoard from '../components/DashBoard';

describe('DashBoard', () => {
  let wrapper;

  const aubergine = [
    "#3F0E40",
    "#350d36",
    "#1164A3",
    "#FFFFFF",
    "#350D36",
    "#FFFFFF",
    "#2BAC76",
    "#CD2553",
    "#350d36",
    "#FFFFFF"
  ]

  beforeEach(() => {
    wrapper = shallow(<DashBoard theme={aubergine}/>);
  })

  it('renders properly', () => {
    expect(wrapper).toBeDefined();
  })

  it('clicking a preset theme will call the onColorChange function', () => {
    const mockFn = jest.fn();
    wrapper = mount(<DashBoard theme={aubergine} setTheme={mockFn}/>);
    const hoth = wrapper.find('[data-theme="Hoth"]');
    hoth.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  })
});