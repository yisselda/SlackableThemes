import React from 'react'
import '../styles/sidebar.scss'

const SideBar = () => {
  const channels = ['front-end-set-up','general', 'react']
  const messages = ['Slackbot','yisselda', 'terrance', 'christine']
  const apps = ['Install Giphy', 'Install Simple Poll', 'Add more apps']

  return (
  <div className='sidebar'>
    <h1 className='company-name'>SlackableThemes</h1>
    <p className='username'>Yisselda</p>
    <h2 className='channels'>Channels</h2>
    <ul className='channels-list'>
      {channels.map((channel) => <li key={channel}># {channel}</li>)}
    </ul>
    <h2 className='direct-messages'>Direct Messages</h2>
    <ul className='messages-list'>
      {messages.map((message) => <li key={message}># {message}</li>)}
    </ul>
    <p className='invite-people'>+ Invite people</p>
    <h2 className='apps'>Apps</h2>
    <ul className='apps-list'>
      {apps.map((app) => <li key={app}>+ {app}</li>)}
    </ul>
  </div>
  )
}

export default SideBar;