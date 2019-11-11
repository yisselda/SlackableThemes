import React, { useState } from 'react';
import '../styles/dashboard.scss';
import PresetThemes from './PresetThemes';
import ImageUpload from './ImageUpload';
import ColorPicker from './ColorPicker';
import ColorInput from './ColorInput';
import presetThemes from '../data/preset-themes'

const DashBoard = props => {
  let [color, setColor] = useState('#00ffff');
  const themes = JSON.parse(JSON.stringify(presetThemes)); 
  const [presetThemeColors, setPresetThemeColors] = useState(themes[0].themeColor);
  let renderThemes = (theme) => {
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

  function onColorChange(newColor) {
    setColor(newColor);
    var newTheme = props.theme;
    newTheme[0] = newColor;
    props.setTheme(newTheme);
  }

  return (
    <div className='dashboard'>
      {renderThemes(themes)}
      <ImageUpload />
      <ColorPicker color={color} onChange={onColorChange} />
      <ColorPicker color={color} onChange={onColorChange} />
      <ColorInput />
    </div>
  );
}

export default DashBoard;