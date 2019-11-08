import React, { useState, useEffect } from 'react'
import SideBar from '../components/SideBar';
import DashBoard from '../components/DashBoard';
import PresetThemes from '../components/PresetThemes';
import presetThemes from '../data/preset-themes';
import '../styles/page-container.scss';
import PropTypes from 'prop-types';

const PageContainer = () => {
  
  // const theme = presetThemes[0].themeColor;
    
  // const setBackground = (color) => {
  //     console.log(theme);
  //     theme[0] = color;
  //     console.log(theme);
  // }

  const [theme, setTheme] = useState(presetThemes[0].themeColor);

  const updateTheme = (theme) => {
    setTheme(theme);
    console.log(theme);
  }

  return (
    <div className='page-container'>
      <SideBar theme={theme} />
      <DashBoard setTheme={updateTheme} theme={theme}/>
    </div>
  )
}

PageContainer.defaultProps = {
  theme: presetThemes[0].themeColor,
}

PageContainer.propTypes = {
  theme: PropTypes.array,
}

export default PageContainer;