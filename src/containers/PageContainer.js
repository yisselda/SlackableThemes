import React, { useState } from 'react'
import SideBar from '../components/SideBar';
import DashBoard from '../components/DashBoard';
import PresetThemes from '../components/PresetThemes';
import presetThemes from '../data/preset-themes';
import '../styles/page-container.scss';
import PropTypes from 'prop-types';

const aubergine = presetThemes[0].themeColor;

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
  theme: PropTypes.array,
}

export default PageContainer;