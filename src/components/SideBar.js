/** @jsx jsx */
import React from 'react';
import '../styles/sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faBookmark, faAddressCard, faEdit } from '@fortawesome/fontawesome-free-regular';
import { faCommentDots, faChevronDown, faAt, faBraille, faLayerGroup, faArrowUp, faPlus, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { jsx, css } from '@emotion/core';

export default function SideBar({ theme: [ columnBg, menuBgHover, activeItem, activeItemText, hoverItem, textColor, activePresence, mentionBadge ]}) {
  const channels = ['front-end-set-up','general', 'random'];
  const messages = ['Slackbot','yisselda', 'terrance', 'christine'];
  
  const hoverBackground = () => css({
    '&:hover': {
      backgroundColor: hoverItem
    }
  })

  const activeBackground = () => css({
    '&:focus': {
      backgroundColor: activeItem,
      color: activeItemText
    }
  })

  const hoverBoldText = () => css({
    '&:hover': {
      opacity: 100
    }
  })
  
  return (
  <div className='sidebar' style={{ backgroundColor: columnBg, color: textColor }} >
    <div className='sidebar-menu' css={{
      '&:hover': {
        backgroundColor: menuBgHover
      }
    }}>
      <FontAwesomeIcon className='edit-icon' icon={faEdit} />
      <h1 className='company-name'>SlackableThemes <FontAwesomeIcon className='down-icon' icon={faChevronDown} /> </h1>
      <p className='username'><span className='active-status' style={{ color: activePresence }} >●</span> Yisselda</p>
    </div>

    <div className='sidebar-nav'>
      {/* <div className='options-container'> */}
        <table className='options-container'>
          <tbody>
          <tr>
            <td>
              <FontAwesomeIcon className='chat-icon' icon={faCommentDots} /> 
            </td>
            <td>
              <p className='threads-option' css={ hoverBackground }>Threads</p>
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon className='at-icon' icon={faAt} />
            </td>
            <td>
              <p className='mentions-option' css={ hoverBackground }>Mentions & reactions</p>
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon className='draft-icon' icon={faCopy} />
            </td>
            <td>
              <p className='drafts-option' css={ hoverBackground }>Drafts</p>
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon className='bookmark-icon' icon={faBookmark} />
            </td>
            <td>
              <p className='bookmarks-option' css={ hoverBackground }>Saved Items</p>
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon className='people-icon' icon={faAddressCard} />
            </td>
            <td>
              <p className='people-option' css={ hoverBackground }>People</p>
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon className='apps-icon' icon={faBraille} />
            </td>
            <td>
              <p className='apps-option' css={ hoverBackground }>Apps</p>
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon className='files-icon' icon={faLayerGroup} />
            </td>
            <td>
              <p className='files-option' css={ hoverBackground }>Files</p>
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon className='up-icon' icon={faArrowUp} />
            </td>
            <td>
              <p className='less-option' css={ hoverBackground }>Show Less</p>
            </td>
          </tr>
          </tbody>
        </table>

    <div className='chat-container'>
      <div className='chat-options'>
        <div className='channels-container'>
        <FontAwesomeIcon className='down-icon' icon={faCaretDown} />
        <FontAwesomeIcon className='plus-icon' icon={faPlus} />
          <h2 className='channels'>Channels</h2>
          <ul className='channels-list' >
            {channels.map((channel) => 
              <li key={channel} css={ hoverBackground }>
                <a  href='#' className={channel} css={ activeBackground }>
                  # &nbsp;<span className="channel-name">{channel}</span>
                  <span className="mention-badge" style={{ backgroundColor: mentionBadge }}>2</span>
                </a>
              </li>
            )}
            <a href="#" className="add-channel" css={ activeBackground }>
              &nbsp; + &nbsp;<span className="channel-name">Add a channel</span>
            </a>
          </ul>
        </div>
            
        <div className='messages-container'>
        <FontAwesomeIcon className='down-icon' icon={faCaretDown} />
        <FontAwesomeIcon className='plus-icon' icon={faPlus} />
          <h2 className='direct-messages'>Direct Messages</h2>
          <ul className='messages-list'>
            {messages.map((message) => <li key={message} css={ hoverBackground }>
              <a href='#' className={message} css={ activeBackground }>
                <span className='active-status' style={{ color: activePresence }}>
                  ● &nbsp;</span> {message}
                </a>
              </li>
            )}
            <li key="invite-people" css={ hoverBackground }>
              <a href="#" className="invite-people" css={ activeBackground }>
                &nbsp; + &nbsp;<span className="channel-name">Invite people</span>
              </a>
            </li>
          </ul>
        </div>
        
        <FontAwesomeIcon className='down-icon' icon={faCaretDown} />
        <FontAwesomeIcon className='plus-icon' icon={faPlus} />
        <h2 className='apps'>Apps</h2>
      </div>
    </div>
    </div>
  </div>
  )
};