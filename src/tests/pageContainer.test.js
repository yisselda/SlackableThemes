import React from 'react';
import { shallow, mount } from 'enzyme'
import PageContainer from '../containers/PageContainer'
import SideBar from '../components/SideBar'
import DashBoard from '../components/DashBoard'

describe("PageContainer", () => {
  let wrapper;

  const aubergine = {
    columnBg: "#3F0E40",
    menuBgHover: "#350D36",
    activeItem: "#1164A3",
    activeItemText: "#FFFFFF",
    hoverItem: "#350D36",
    textColor: "#FFFFFF",
    activePresence: "#2BAC76",
    mentionBadge: "#CD2553",
  }

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