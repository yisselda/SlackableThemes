import React from 'react';
import { shallow } from 'enzyme'
import PageContainer from '../containers/PageContainer'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
import SideBar from '../components/SideBar'
import DashBoard from '../components/DashBoard'

Enzyme.configure({ adapter: new Adapter() });

describe("PageContainer", () => {
  let wrapper;

  it('render a <div>', () => {
    wrapper = shallow(<PageContainer/>)
    expect(wrapper.type()).toBe('div');
  })

  it('renders a <SideBar> and <DashBoard>', () => {
    expect(wrapper.childAt(0).type()).toBe(SideBar)
    expect(wrapper.childAt(1).type()).toBe(DashBoard)
  })


})