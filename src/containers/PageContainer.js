import React from 'react';
import '../styles/page-container.scss';
import SideBar from '../components/SideBar';
import DashBoard from '../components/DashBoard';
import PropTypes from 'prop-types';

const aubergine = {
  columnBg: "#3F0E40",
  menuBgHover: "#350D36",
  // activeItem: "#1164A3",
  activeItem: '#F70A0A',
  activeItemText: "#FFFFFF",
  hoverItem: "#350D36",
  textColor: "#FFFFFF",
  activePresence: "#2BAC76",
  mentionBadge: "#CD2553",
}

const PageContainer = () => {
  return (
    <div className='page-container'>
      <SideBar theme={aubergine} />
      <DashBoard/>
    </div>
  )
}

PageContainer.defaultProps = {
  theme: aubergine,
}

PageContainer.propTypes = {
  theme: PropTypes.object,
}

export default PageContainer;