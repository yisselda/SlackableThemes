import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import SideBar from '../components/SideBar';

Enzyme.configure({ adapter: new Adapter() });

describe("SideBar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SideBar/>);
  })
  
  it('render a <div>', () => {
    expect(wrapper.type()).toBe('div');
  })

  it('renders a company of SlackableThemes', () => {
    expect(wrapper.find('h1').text()).toBe('SlackableThemes');
  })

  it('renders a user of Yisselda', () => {
    expect(wrapper.find('p').text()).toBe('Yisselda');
  })

  it('renders a channel section', () => {
    expect(wrapper.find('h2.channels').text()).toBe('Channels');
    // expect(wrapper.find('channels-list').length()).toBe(3);
  })

  it('renders a Direct Messages section', () => {
    expect(wrapper.find('h2.direct-messages').text()).toBe('Direct Messages');
  })

  it('renders an Apps section', () => {
    expect(wrapper.find('h2.apps').text()).toBe('Apps');
  })
})