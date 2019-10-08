import React from 'react';
import { shallow } from 'enzyme'
import PageContainer from '../containers/PageContainer'
import Enzyme from 'enzyme'
import SideBar from '../components/SideBar'
import DashBoard from '../components/DashBoard'
import WorkspaceSideBar from '../components/WorkspaceSideBar';


describe("PageContainer", () => {
  let wrapper;

  it('render a <div>', () => {
    wrapper = shallow(<PageContainer/>)
    expect(wrapper.type()).toBe('div');
  })

  it('renders a <SideBar> and <DashBoard>', () => {
    expect(wrapper.childAt(0).type()).toBe(WorkspaceSideBar)    
    expect(wrapper.childAt(1).type()).toBe(SideBar)
    expect(wrapper.childAt(2).type()).toBe(DashBoard)
  })
})