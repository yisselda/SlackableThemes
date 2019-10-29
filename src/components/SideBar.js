/** @jsx jsx */
import React, { useState } from 'react';
import '../styles/sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell as farBell } from '@fortawesome/fontawesome-free-regular';
import { faPlusCircle, faCommentDots, faChevronDown, faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';
import { jsx, css } from '@emotion/core';

const SideBar = ({ theme }) => {
  const channels = ['front-end-set-up','general', 'random'];
  const messages = ['Slackbot','yisselda', 'terrance', 'christine'];
  const apps = ['Install Giphy', 'Install Simple Poll', 'Add more apps'];
  const [ columnBg, menuBgHover, activeItem, activeItemText, hoverItem, textColor, activePresence, mentionBadge ] = theme;

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
      <FontAwesomeIcon className='bell-icon' icon={['far', 'bell']} />
      <h1 className='company-name'>SlackableThemes <FontAwesomeIcon className='down-icon' icon={faChevronDown} /> </h1>
      <p className='username'><span className='active-status' style={{ color: activePresence }} >●</span> Yisselda</p>
    </div>

    <div className='sidebar-nav'>
      <input className='find-input' type='text' value='Jump to...' readOnly style={{ color: textColor }} />

      <p className='threads' css={ hoverBackground }><FontAwesomeIcon className='chat-icon' icon={faCommentDots} /> Threads</p>

      <FontAwesomeIcon className='plus-icon' icon={faPlusCircle} />
      <h2 className='channels' css={ hoverBoldText }>Channels</h2>
      <ul className='channels-list' >
        {channels.map((channel) => <li key={channel} css={ hoverBackground }><a  href='#' className={channel} css={ activeBackground }># {channel}</a></li>)}
      </ul>

      <FontAwesomeIcon className='plus-icon' icon={faPlusCircle} />
      <h2 className='direct-messages' css={ hoverBoldText }>Direct Messages</h2>
      <ul className='messages-list'>
        {messages.map((message) => <li key={message} css={ hoverBackground }><a href='#' className={message} css={ activeBackground }><span className='active-status' style={{ color: activePresence }}>●</span> {message}</a></li>)}
      </ul>

      <p className='invite-people' css={ hoverBackground }>+ Invite people</p>

      <FontAwesomeIcon className='plus-icon' icon={faPlusCircle} />
      <h2 className='apps' css={ hoverBoldText }>Apps</h2>
      <ul className='apps-list'>
        {apps.map((app) => <li key={app} css={ hoverBackground }><a href='#'>+ {app}</a></li>)}
      </ul>
    </div>
  </div>
  )
}

export default SideBar;