import React from 'react'

import styles from "../styles/SideBar.modules.css";

const SideBar = () => {
  const channels = ['general', 'random']
  const messages = ['yisselda', 'terrance', 'christine']
  const apps = ['Install Google Drive']

  return (
  <div className='sidebar'>
    <h1>SlackableThemes</h1>
    <p>Yisselda</p>
    <h2 className='channels'>Channels</h2>
    <ul className='channels-list'>
      {channels.map((channel) => <li key={channel}># {channel}</li>)}
    </ul>
    <h2 className='direct-messages'>Direct Messages</h2>
    <ul className='messages-list'>
      {messages.map((message) => <li key={message}># {message}</li>)}
    </ul>
    <h2 className='apps'>Apps</h2>
    <ul className='apps-list'>
      {apps.map((app) => <li key={app}># {app}</li>)}
    </ul>
  </div>
  )
}

export default SideBar;