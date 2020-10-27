/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import React, { useState } from 'react'
import SideBar from '../components/SideBar';
import DashBoard from '../components/DashBoard';
import presetThemes from '../data/themes';
import '../styles/page-container.scss';
import PropTypes from 'prop-types';

export default function PageContainer(){
  const [theme, setTheme] = useState(presetThemes[0].themeColor);
  const [darkMode, setDarkMode] = useState(false)

  const updateTheme = (t) => {
    setTheme([...t]);
  };

  const darkColor = '#1D1A21'
  const dm = css`
    background-color: ${darkMode ? darkColor : 'white'};
    color: ${darkMode ? 'white' : darkColor};
  `

  return (
    <div className='page-container' css={dm}>
      <SideBar theme={theme} />
      <DashBoard setTheme={updateTheme} setDarkMode={(isOn) => setDarkMode(isOn)} theme={theme}/>
    </div>
  )
};

PageContainer.defaultProps = {
  theme: presetThemes[0].themeColor,
};

PageContainer.propTypes = {
  theme: PropTypes.arrayOf(PropTypes.string.isRequired),
};