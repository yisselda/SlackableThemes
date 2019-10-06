import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import SideBar from '../components/SideBar';

describe("SideBar", () => {
  let wrapper;

  const channels = ["general", "react"]
  const messages = ['yisselda', 'terrance', 'christine']
  const apps = ['Install Google Drive']

  beforeEach(() => {
    wrapper = shallow(<SideBar channels={channels} />);
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
    expect(wrapper.find('ul.channels-list').children()).toHaveLength(channels.length);
  })

  it('renders a Direct Messages section', () => {
    expect(wrapper.find('h2.direct-messages').text()).toBe('Direct Messages');
    expect(wrapper.find('ul.messages-list').children()).toHaveLength(messages.length);
  })

  it('renders an Apps section', () => {
    expect(wrapper.find('h2.apps').text()).toBe('Apps');
    expect(wrapper.find('ul.apps-list').children()).toHaveLength(apps.length);
  })
})