import React, { useState } from 'react'
import SideBar from '../components/SideBar';
import DashBoard from '../components/DashBoard';
import presetThemes from '../data/preset-themes';
import '../styles/page-container.scss';
import PropTypes from 'prop-types';

export default function PageContainer(){
  const [theme, setTheme] = useState(presetThemes[0].themeColor);

  const updateTheme = (t) => {
    setTheme([...t]);
  };

  return (
    <div className='page-container'>
      <SideBar theme={theme} />
      <DashBoard setTheme={updateTheme} theme={theme}/>
    </div>
  )
};

PageContainer.defaultProps = {
  theme: presetThemes[0].themeColor,
};

PageContainer.propTypes = {
  theme: PropTypes.array,
};