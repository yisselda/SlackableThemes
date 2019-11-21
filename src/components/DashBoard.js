import React, { useState, useEffect } from 'react';
import '../styles/dashboard.scss';
import PresetTheme from './PresetTheme';
import ImageUpload from './ImageUpload';
import ColorPicker from './ColorPicker';
import ColorInput from './ColorInput';
import presetThemes from '../data/preset-themes'

export default function DashBoard({ setTheme, theme, theme: [ columnBg, menuBgHover, activeItem, activeItemText, hoverItem, textColor, activePresence, mentionBadge ]}) {
  const themes = JSON.parse(JSON.stringify(presetThemes)); 
  const [ color, setColor ] = useState('#00ffff');

  let renderThemes = (theme) => {
    return theme.map(t => (
        <PresetTheme 
          key={t.id}
          theme={t.theme}
          image={t.image}
          themeColors={t.themeColor}
          updateThemeColors={setTheme}
        />
      )
    )
  }

  const onColorChange = (newColor, position, e) =>  {
    setColor(newColor);
    var newTheme = theme;
    newTheme[position] = newColor;
    setTheme(newTheme);
  }

  return (
    <div className='dashboard'>
      <h2 className="default-theme-title">Default Sidebar Themes</h2>
      {renderThemes(themes)}
      <ImageUpload />
      <h2 className='colorpickers-title'>Custom Theme</h2>
      <div className="colorpickers-container">
        <ColorPicker label="Column BG" color={columnBg} onChange={(newColor, position, e) => onColorChange(newColor, 0, e)}/>
        <ColorPicker label="Menu BG Hover" color={menuBgHover} onChange={(newColor, position, e) => onColorChange(newColor, 1, e)}/>
        <ColorPicker label="Active Item" color={activeItem} onChange={(newColor, position, e) => onColorChange(newColor, 2, e)}/>
        <ColorPicker label="Active Item Text" color={activeItemText} onChange={(newColor, position, e) => onColorChange(newColor, 3, e)}/>
        <ColorPicker label="Hover Item" color={hoverItem} onChange={(newColor, position, e) => onColorChange(newColor, 4, e)}/>
        <ColorPicker label="Text Color" color={textColor} onChange={(newColor, position, e) => onColorChange(newColor, 5, e)}/>
        <ColorPicker label="Active Presence" color={activePresence} onChange={(newColor, position, e) => onColorChange(newColor, 6, e)}/>
        <ColorPicker label="Mention Badge" color={mentionBadge} onChange={(newColor, position, e) => onColorChange(newColor, 7, e)}/>
      </div>
      <ColorInput />
    </div>
  );
};