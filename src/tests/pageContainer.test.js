import React from 'react';
import { shallow, mount } from 'enzyme'
import PageContainer from '../containers/PageContainer'
import SideBar from '../components/SideBar'
import DashBoard from '../components/DashBoard'
import presetThemes from "../data/preset-themes";

describe("PageContainer", () => {
  let wrapper;

  const aubergine = presetThemes[0].themeColor;

  it('render a <div>', () => {
    wrapper = shallow(<PageContainer theme={aubergine} />)
    expect(wrapper.type()).toBe('div');
  })

  it('renders a <SideBar> and <DashBoard>', () => {
    expect(wrapper.childAt(0).type()).toBe(SideBar)
    expect(wrapper.childAt(1).type()).toBe(DashBoard)
  })

  it('passes the theme prop to SideBar', () => {
    wrapper = mount(<PageContainer />);
    expect(wrapper.prop('theme')).toEqual(aubergine);
  })
})