import React from 'react';
import { shallow, mount } from 'enzyme';
import SideBar from '../components/SideBar';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import { matchers } from 'jest-emotion';
import styled from '@emotion/styled';

expect.extend(matchers)

describe('SideBar', () => {
  let wrapper;

  const channels = ['front-end-set-up','general', 'random']
  const messages = ['Slackbot','yisselda', 'terrance', 'christine']
  const apps = ['Install Giphy', 'Install Simple Poll', 'Add more apps']

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

  beforeEach(() => {
    wrapper = shallow(<SideBar theme={aubergine}/>);
  })
  
  it('render a <div>', () => {
    expect(wrapper.type()).toBe('div');
  })

  it('renders a company of SlackableThemes', () => {
    expect(wrapper.find('.company-name').text()).toMatch(/SlackableThemes/);
  })

  it('renders a user of Yisselda', () => {
    expect(wrapper.find('.username').text()).toBe('● Yisselda');
  })

  it('displays a Threads section', () => {
    expect(wrapper.find('.threads').text()).toMatch(/Threads/);
  })

  it('renders a display only input box', () => {
    const input = wrapper.find('input');
    input.value = 'Jump to...';
    expect(input.value).toEqual('Jump to...');
    input.simulate("change", {target: { value: 'random'} });
    expect(input.value).toEqual('Jump to...');
  })

  it('renders a channel section', () => {
    expect(wrapper.find('.channels').text()).toBe('Channels');
    expect(wrapper.find('.channels-list').children()).toHaveLength(channels.length);
  })

  it('renders a Direct Messages section', () => {
    expect(wrapper.find('.direct-messages').text()).toBe('Direct Messages');
    expect(wrapper.find('.messages-list').children()).toHaveLength(messages.length);
  })

  it('renders an Apps section', () => {
    expect(wrapper.find('.apps').text()).toBe('Apps');
    expect(wrapper.find('.apps-list').children()).toHaveLength(apps.length);
  })

  it('renders an invite option', () => {
    expect(wrapper.find('.invite-people').text()).toBe('+ Invite people');
  })

  describe('renders sidebar styles properly', () => {
    it('renders a sidebar with a background of columnBg', () => {
      expect(wrapper.find('.sidebar').prop('style')).toHaveProperty('backgroundColor', aubergine.columnBg);
    })

    it('renders a sidebar with a text color of textColor', () => {
      expect(wrapper.find('.sidebar').prop('style')).toHaveProperty('color', aubergine.textColor);
    })

    it('renders a span with a color of activePresence', () => {
      wrapper.find('.active-status').forEach((node) => {
        expect(node.prop('style')).toHaveProperty('color', aubergine.activePresence);
      })
    })

    it('highlights p tags on focus', () => {
      wrapper = mount(<SideBar theme={aubergine}/>);
      expect(wrapper.find('.invite-people')).toHaveStyleRule('background-color', aubergine.hoverItem, { target: ':hover'});
      expect(wrapper.find('.threads')).toHaveStyleRule('background-color', aubergine.hoverItem, { target: ':hover'});
    })

    it('highlights line items on focus', () => {
      wrapper = mount(<SideBar theme={aubergine}/>);
      expect(wrapper.find('.channels-list').children()).toHaveStyleRule('background-color', aubergine.hoverItem, { target: ':hover'});
      expect(wrapper.find('.messages-list').children()).toHaveStyleRule('background-color', aubergine.hoverItem, { target: ':hover'});
      expect(wrapper.find('.apps-list').children()).toHaveStyleRule('background-color', aubergine.hoverItem, { target: ':hover'});
    })

    it('boldens h2 text on hover', () => {
      wrapper = mount(<SideBar theme={aubergine}/>);
      expect(wrapper.find('.channels')).toHaveStyleRule('opacity', '100', { target: ':hover'});
      expect(wrapper.find('.direct-messages')).toHaveStyleRule('opacity', '100', { target: ':hover'});
      expect(wrapper.find('.apps')).toHaveStyleRule('opacity', '100', { target: ':hover'});
    })

    it('highlights the active item on focus', () => {
      wrapper = mount(<SideBar theme={aubergine}/>);
      const item = wrapper.find(`.${channels[0]}`);
      expect(item).toHaveStyleRule('background-color', aubergine.activeItem, { target: ':focus'});
      expect(item).toHaveStyleRule('color', aubergine.activeItemText, { target: ':focus'});
      const item2 = wrapper.find(`.${messages[0]}`);
      expect(item2).toHaveStyleRule('background-color', aubergine.activeItem, { target: ':focus'});
      expect(item2).toHaveStyleRule('color', aubergine.activeItemText, { target: ':focus'});
      expect(item).not.toHaveStyleRule('background-color', aubergine.activeItem);
      expect(item).not.toHaveStyleRule('color', aubergine.activeItemText);
    })
  })
})