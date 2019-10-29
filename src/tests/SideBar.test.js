import React from 'react';
import { shallow, mount } from 'enzyme';
import SideBar from '../components/SideBar';
import renderer from 'react-test-renderer';
import { matchers } from 'jest-emotion';
import styled from '@emotion/styled';
import presetThemes from "../data/preset-themes";

expect.extend(matchers)

describe('SideBar', () => {
  let wrapper;

  const channels = ['front-end-set-up','general', 'random']
  const messages = ['Slackbot','yisselda', 'terrance', 'christine']
  const apps = ['Install Giphy', 'Install Simple Poll', 'Add more apps']

  const aubergine = presetThemes[0].themeColor;
  const [ columnBg, menuBgHover, activeItem, activeItemText, hoverItem, textColor, activePresence, mentionBadge ] = aubergine;

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
      expect(wrapper.find('.sidebar').prop('style')).toHaveProperty('backgroundColor', columnBg);
    })

    it('renders a sidebar with a text color of textColor', () => {
      expect(wrapper.find('.sidebar').prop('style')).toHaveProperty('color', textColor);
    })

    it('renders a span with a color of activePresence', () => {
      wrapper.find('.active-status').forEach((node) => {
        expect(node.prop('style')).toHaveProperty('color', activePresence);
      })
    })

    it('highlights the top menu div on hover', () => {
      wrapper = mount(<SideBar theme={aubergine}/>);
      expect(wrapper.find('.sidebar-menu')).toHaveStyleRule('background-color', menuBgHover, { target: ':hover'});
    })

    it('highlights p tags on focus', () => {
      wrapper = mount(<SideBar theme={aubergine}/>);
      expect(wrapper.find('.invite-people')).toHaveStyleRule('background-color', hoverItem, { target: ':hover'});
      expect(wrapper.find('.threads')).toHaveStyleRule('background-color', hoverItem, { target: ':hover'});
    })

    it('highlights line items on focus', () => {
      wrapper = mount(<SideBar theme={aubergine}/>);
      expect(wrapper.find('.channels-list').children()).toHaveStyleRule('background-color', hoverItem, { target: ':hover'});
      expect(wrapper.find('.messages-list').children()).toHaveStyleRule('background-color', hoverItem, { target: ':hover'});
      expect(wrapper.find('.apps-list').children()).toHaveStyleRule('background-color', hoverItem, { target: ':hover'});
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
      expect(item).toHaveStyleRule('background-color', activeItem, { target: ':focus'});
      expect(item).toHaveStyleRule('color', activeItemText, { target: ':focus'});
      const item2 = wrapper.find(`.${messages[0]}`);
      expect(item2).toHaveStyleRule('background-color', activeItem, { target: ':focus'});
      expect(item2).toHaveStyleRule('color', activeItemText, { target: ':focus'});
      expect(item).not.toHaveStyleRule('background-color', activeItem);
      expect(item).not.toHaveStyleRule('color', activeItemText);
    })
  })
})