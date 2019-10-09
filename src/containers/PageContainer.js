import React from 'react';
import '../styles/page-container.scss';
import SideBar from '../components/SideBar';
import DashBoard from '../components/DashBoard';

const themes = require('../themes/defaultThemes');
const { aubergine }  = themes;

const PageContainer = () => {
  return (
    <div className='page-container'>
      <SideBar theme={aubergine} />
      <DashBoard/>
    </div>
  )
}

export default PageContainer;