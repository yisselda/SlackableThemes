import React from 'react';
import { shallow, mount } from 'enzyme';
import { render, fireEvent } from '@testing-library/react';
import { toHaveStyle } from '@testing-library/jest-dom';
import SideBar, {channels, messages} from '../components/SideBar';
import { matchers } from 'jest-emotion';

expect.extend(matchers)

describe('SideBar', () => {
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

  it('displays a sidebar-nav section', () => {
    expect(wrapper.exists('.options-container')).toEqual(true);
    expect(wrapper.find('.threads-option').text()).toMatch(/Threads/);
    expect(wrapper.find('.mentions-option').text()).toMatch(/Mentions & reactions/);
    expect(wrapper.find('.drafts-option').text()).toMatch(/Drafts/);
    expect(wrapper.find('.bookmarks-option').text()).toMatch(/Saved Items/);
    expect(wrapper.find('.people-option').text()).toMatch(/People/);
    expect(wrapper.find('.apps-option').text()).toMatch(/Apps/);
    expect(wrapper.find('.files-option').text()).toMatch(/Files/);
    expect(wrapper.find('.less-option').text()).toMatch(/Show Less/);
  })

  it('renders a channel section', () => {
    expect(wrapper.find('.channels').text()).toBe('Channels');
    expect(wrapper.find('.channels-list').children()).toHaveLength(channels.length + 1);
    expect(wrapper.exists('.add-channel')).toEqual(true);
  })

  it('renders a Direct Messages section', () => {
    expect(wrapper.find('.direct-messages').text()).toBe('Direct Messages');
    expect(wrapper.find('.messages-list').children()).toHaveLength(messages.length + 1);
    expect(wrapper.exists('.invite-people')).toEqual(true);
  })

  it('renders an Apps section', () => {
    expect(wrapper.find('.apps').text()).toBe('Apps');
  })

  it('renders an invite option', () => {
    expect(wrapper.find('.invite-people').text()).toMatch(/Invite people/);
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
      expect(wrapper.find('.sidebar-menu')).toHaveStyleRule('background-color', hoverItem, { target: ':hover'});
    })

    test('The active item is highlighted on click and remains so until another list item is clicked', () => {
      const {getByText} = render(<SideBar theme={aubergine}/>);
      const threadLink = getByText('Threads');
      fireEvent.click(threadLink);
      expect(threadLink).toHaveStyle(`backgroundColor: ${activeItem}`);
      fireEvent.click(getByText('Yisselda'));
      expect(threadLink).toHaveStyle(`backgroundColor: ${activeItem}`);
      const peopleLink = getByText('People');
      fireEvent.click(peopleLink);
      expect(threadLink).not.toHaveStyle(`backgroundColor: ${activeItem}`);
      expect(peopleLink).toHaveStyle(`backgroundColor: ${activeItem}`);
    })

    it('displays the mention badge with the mention badge color', () => {
      wrapper = mount(<SideBar theme={aubergine}/>);
      const item = wrapper.find(`.${channels[0]} .mention-badge`);
      expect(item.prop('style')).toHaveProperty('backgroundColor', mentionBadge);
      expect(item.prop('style')).toHaveProperty('color', '#FFFFFF');
    })
  })
})