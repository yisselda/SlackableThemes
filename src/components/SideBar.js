/** @jsx jsx */
import '../styles/sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faBookmark, faAddressCard, faEdit } from '@fortawesome/fontawesome-free-regular';
import { faCommentDots, faChevronDown, faAt, faBraille, faLayerGroup, faArrowUp, faPlus, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { jsx, css } from '@emotion/core';

export default function SideBar({ theme: [ columnBg, activeItem, activeItemText, hoverItem, textColor, activePresence, mentionBadge ]}) {
  const channels = ['front-end-set-up','general', 'random'];
  const messages = ['Slackbot','yisselda', 'terrance', 'christine'];
  
  const hoverBackground = css`
    &:hover {
      background-color: ${hoverItem};
      background-clip: border-box;
    }
  `

  const activeBackground = css`
    &:focus {
      background-color: ${activeItem};
      color: ${activeItemText};
    }
  `
  
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
          <a href="#!" className='threads-option' css={ activeBackground }><FontAwesomeIcon className='chat-icon' icon={faCommentDots} /> Threads</a>
        </li>
        <li css={ hoverBackground }>
          <a href="#!" className='mentions-option' css={ activeBackground }><FontAwesomeIcon className='at-icon' icon={faAt} /> Mentions & reactions</a>
        </li>
        <li css={ hoverBackground }>
          <a href="#!" className='drafts-option' css={ activeBackground }><FontAwesomeIcon className='draft-icon' icon={faCopy} /> Drafts</a>
        </li>
        <li css={ hoverBackground }>
          <a href="#!" className='bookmarks-option' css={ activeBackground }><FontAwesomeIcon className='bookmark-icon' icon={faBookmark} /> Saved Items</a>
        </li>
        <li css={ hoverBackground }>
          <a href="#!" className='people-option' css={ activeBackground }><FontAwesomeIcon className='people-icon' icon={faAddressCard} /> People</a>
        </li>
        <li css={ hoverBackground }>
          <a href="#!" className='apps-option' css={ activeBackground }><FontAwesomeIcon className='apps-icon' icon={faBraille} /> Apps</a>
        </li>
        <li css={ hoverBackground }>
          <a href="#!" className='files-option' css={ activeBackground }><FontAwesomeIcon className='files-icon' icon={faLayerGroup} /> Files</a>
        </li>
        <li css={ hoverBackground }>
          <a href="#!" className='less-option' css={ activeBackground }><FontAwesomeIcon className='up-icon' icon={faArrowUp} /> Show Less</a>
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
                <a  href='#!' className={channel} css={ activeBackground }>
                  # &nbsp;<span className="channel-name">{channel}</span>
                  <span className="mention-badge" style={{ backgroundColor: mentionBadge }}>2</span>
                </a>
              </li>
            )}
            <li key="add-channel" css={ hoverBackground }>
              <a href="#!" className="add-channel" css={ activeBackground }>
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
              <a href='#!' className={message} css={ activeBackground }>
                <span className='active-status' style={{ color: activePresence }}>
                  ● &nbsp;</span> {message}
                </a>
              </li>
            )}
            <li key="invite-people" css={ hoverBackground }>
              <a href="#!" className="invite-people" css={ activeBackground }>
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