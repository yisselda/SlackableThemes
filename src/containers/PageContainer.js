import React, { useState } from 'react'
import SideBar from '../components/SideBar';
import DashBoard from '../components/DashBoard';
import PresetThemes from '../components/PresetThemes';
import presetThemes from '../data/preset-themes';
import '../styles/page-container.scss';

const PageContainer = () => {

  return (
    <div className='page-container'>
      <SideBar/>
      <DashBoard/>
    </div>
    )
}

export default PageContainer;