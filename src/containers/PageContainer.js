import React, { useState } from 'react'
import SideBar from '../components/SideBar';
import DashBoard from '../components/DashBoard';
import PresetThemes from '../components/PresetThemes';
import presetThemes from '../data/preset-themes';

const PageContainer = props => {
  const themes = JSON.parse(JSON.stringify(presetThemes)); 
  const [themeColors, setThemeColors] = useState(themes[0].themeColor);
  return (
    <div>
      <SideBar/>
      <DashBoard/>
      {themes.map((t, i) => 
        <PresetThemes 
          key={i.id}
          theme={t.theme}
          image={t.image}
          themeColors={t.themeColor}
          setThemeColors={setThemeColors}
        />
      )}
    </div>
    )
}

export default PageContainer;