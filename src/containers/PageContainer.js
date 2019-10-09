import React, { useState } from 'react'
import SideBar from '../components/SideBar';
import DashBoard from '../components/DashBoard';
import PresetThemes from '../components/PresetThemes';
import presetThemes from '../data/preset-themes';

const PageContainer = props => {
  const themes = JSON.parse(JSON.stringify(presetThemes)); 
  const [presetThemeColors, setPresetThemeColors] = useState(themes[0].themeColor);
  var renderThemes = (theme) => {
    return theme.map(t => (
        <PresetThemes 
          key={t.id}
          theme={t.theme}
          image={t.image}
          themeColors={t.themeColor}
          setPresetThemeColors={setPresetThemeColors}
        />
      )
    )
  }

  return (
    <div>
      <SideBar/>
      <DashBoard/>
      {renderThemes(themes)}
    </div>
    )
}

export default PageContainer;