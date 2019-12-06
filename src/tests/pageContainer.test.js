import React from 'react';
import { shallow, mount } from 'enzyme';
import PageContainer from '../containers/PageContainer';
import SideBar from '../components/SideBar';
import DashBoard from '../components/DashBoard';

describe("PageContainer", () => {
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
  ]

  beforeEach(() => {
    wrapper = shallow(<PageContainer />);
  })

  it('renders properly', () => {
    expect(wrapper).toBeDefined();
  })

  it('renders a <SideBar> and <DashBoard>', () => {
    expect(wrapper.childAt(0).type()).toBe(SideBar)
    expect(wrapper.childAt(1).type()).toBe(DashBoard)
  })

  it('passes the theme prop to SideBar and DashBoard', () => {
    wrapper = mount(<PageContainer />);
    expect(wrapper.prop('theme')).toEqual(aubergine);
  })
})