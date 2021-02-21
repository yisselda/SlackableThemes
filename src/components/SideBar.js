/** @jsx jsx */
import '../styles/sidebar.scss';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faBookmark, faAddressCard, faEdit } from '@fortawesome/fontawesome-free-regular';
import { faCommentDots, faChevronDown, faAt, faBraille, faLayerGroup, faArrowUp, faPlus, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { jsx, css } from '@emotion/core';

export const channels = ['front-end-set-up','general', 'random'];
export const messages = ['Slackbot','yisselda', 'terrance', 'christine', '_steph.js'];

export default function SideBar({ theme: [ columnBg, menuBgHover, activeItem, activeItemText, hoverItem, textColor, activePresence, mentionBadge, topNavBg, TopNavText ]}) {  
  const [selectedOption, setSelectedOption] = useState(null); 
  
  const hoverBackground = css`
    &:hover {
      background-color: ${hoverItem};
      background-clip: border-box;
    }
  `

  const activeBackground = css`
    {
      background-color: ${activeItem};
      color: ${activeItemText};
    }
  `;
  
  const doActiveHighlight = (className) => {
    if (typeof selectedOption !== 'undefined' && selectedOption !== null && selectedOption.includes(className)) {
        return activeBackground;
    }
    return null;
  };

  const handleLinkClick = ({target}) => {
    let targetClassname = target.className;
    if ('active-status' === targetClassname || 'channel-name' === targetClassname || 'mention-badge' === targetClassname) {
      let parent = target.parentElement;
      if (parent && 'A' === parent.tagName.toUpperCase()) {
        setSelectedOption(parent.className);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleLinkClick);
    return () => { // cleanup event listener on unmount
      window.removeEventListener('click', handleLinkClick);
    };
  }, []);
   
  return (
  <div className='sidebar' style={{ backgroundColor: columnBg, color: textColor }} >
    <div className='sidebar-menu' css={hoverBackground}>
      <FontAwesomeIcon className='edit-icon' icon={faEdit} />
      <h1 className='company-name'>SlackableThemes <FontAwesomeIcon className='down-icon' icon={faChevronDown} /> </h1>
      <p className='username'><span className='active-status' style={{ color: activePresence }} >●</span> Yisselda</p>
    </div>

    <div className='sidebar-nav'>
      <ul className='options-container' >
        <li css={ hoverBackground }>
          <a href="#!" className={'threads-option'} css={doActiveHighlight('threads-option')} onClick={(event) => setSelectedOption(event.target.className)}><FontAwesomeIcon className='chat-icon' icon={faCommentDots} /> Threads</a>
        </li>
        <li css={ hoverBackground }>
          <a href="#!" className={'mentions-option'} css={doActiveHighlight('mentions-option')} onClick={(event) => setSelectedOption(event.target.className)}><FontAwesomeIcon className='at-icon' icon={faAt} /> Mentions & reactions</a>
        </li>
        <li css={ hoverBackground }>
          <a href="#!" className={'drafts-option'} css={doActiveHighlight('drafts-option')} onClick={(event) => setSelectedOption(event.target.className)}><FontAwesomeIcon className='draft-icon' icon={faCopy} /> Drafts</a>
        </li>
        <li css={ hoverBackground }>
          <a href="#!" className={'bookmarks-option'} css={doActiveHighlight('bookmarks-option')} onClick={(event) => setSelectedOption(event.target.className)}><FontAwesomeIcon className='bookmark-icon' icon={faBookmark} /> Saved Items</a>
        </li>
        <li css={ hoverBackground }>
          <a href="#!" className={'people-option'} css={doActiveHighlight('people-option')} onClick={(event) => setSelectedOption(event.target.className)}><FontAwesomeIcon className='people-icon' icon={faAddressCard} /> People</a>
        </li>
        <li css={ hoverBackground }>
          <a href="#!" className={'apps-option'} css={doActiveHighlight('apps-option')} onClick={(event) => setSelectedOption(event.target.className)}><FontAwesomeIcon className='apps-icon' icon={faBraille} /> Apps</a>
        </li>
        <li css={ hoverBackground }>
          <a href="#!" className={'files-option'} css={doActiveHighlight('files-option')} onClick={(event) => setSelectedOption(event.target.className)}><FontAwesomeIcon className='files-icon' icon={faLayerGroup} /> Files</a>
        </li>
        <li css={ hoverBackground }>
          <a href="#!" className={'less-option'} css={doActiveHighlight('less-option')} onClick={(event) => setSelectedOption(event.target.className)}><FontAwesomeIcon className='up-icon' icon={faArrowUp} /> Show Less</a>
        </li>
      </ul>

    <div className='chat-container'>
      <div className='chat-options'>
        <div className='channels-container'>
          <FontAwesomeIcon className='down-icon' icon={faCaretDown} />
          <FontAwesomeIcon className='plus-icon' icon={faPlus} />
          <h2 className='channels'>Channels</h2>
        </div>
          <ul className='channels-list' >
            {channels.map((channel) => 
              <li key={channel} css={ hoverBackground }>
                <a  href='#!' className={channel} css={doActiveHighlight(channel)} onClick={(event) => setSelectedOption(event.target.className)}>
                  # &nbsp;<span className="channel-name">{channel}</span>
                  <span className="mention-badge" style={{ backgroundColor: mentionBadge, color: "#FFFFFF" }}>2</span>
                </a>
              </li>
            )}
            <li key="add-channel" css={ hoverBackground }>
              <a href="#!" className="add-channel" css={doActiveHighlight('add-channel')} onClick={(event) => setSelectedOption(event.target.className)}>
                + &nbsp;<span className="channel-name">Add a channel</span>
              </a>
            </li>
          </ul>
            
        <div className='messages-container'>
          <FontAwesomeIcon className='down-icon' icon={faCaretDown} />
          <FontAwesomeIcon className='plus-icon' icon={faPlus} />
          <h2 className='direct-messages'>Direct Messages</h2>
        </div>
          <ul className='messages-list'>
            {messages.map((message) => <li key={message} css={ hoverBackground }>
              <a href='#!' className={message} css={doActiveHighlight(message)} onClick={(event) => setSelectedOption(event.target.className)}>
                <span className='active-status' style={{ color: activePresence }}>
                  ● &nbsp;</span> {message}
                </a>
              </li>
            )}
            <li key="invite-people" css={ hoverBackground }>
              <a href="#!" className="invite-people" css={doActiveHighlight('invite-people')} onClick={(event) => setSelectedOption(event.target.className)}>
                + &nbsp;<span className="channel-name">Invite people</span>
              </a>
            </li>
          </ul>
        
        <div className="apps-container">
          <FontAwesomeIcon className='down-icon' icon={faCaretDown} />
          <FontAwesomeIcon className='plus-icon' icon={faPlus} />
          <h2 className='apps'>Apps</h2>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
};