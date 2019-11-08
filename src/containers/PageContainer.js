import React, { useState, useEffect } from 'react'
import SideBar from '../components/SideBar';
import DashBoard from '../components/DashBoard';
import PresetThemes from '../components/PresetThemes';
import presetThemes from '../data/preset-themes';
import '../styles/page-container.scss';
import PropTypes from 'prop-types';

const PageContainer = () => {
  const [theme, setTheme] = useState(presetThemes[0].themeColor);

  useEffect(() => {
    console.log(`PageContainer ${theme}`)
  });

  const updateTheme = (t) => {
    setTheme([...t]);
    console.log("Target: ", t);
    console.log("ThemFr: ", theme)
  }

  return (
    <div className='page-container'>
      { console.log("Theme in render: ",theme)}
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