import React, { useState } from 'react';
import '../styles/dashboard.scss';
import PresetThemes from './PresetThemes';
import ImageUpload from './ImageUpload';
import ColorPicker from './ColorPicker';
import ColorInput from './ColorInput';
import presetThemes from '../data/preset-themes'

const DashBoard = props => {
  let [columnBgColor, setColumnBgColor] = useState('#00ffff');
  let [menuBgHoverColor, setMenuBgHoverColor] = useState('#00ffff');
  let [activeItemColor, setActiveItemColor] = useState('#00ffff');
  let [activeItemTextColor, setActiveItemTextColor] = useState('#00ffff');
  let [hoverItemColor, setHoverItemColor] = useState('#00ffff');
  let [textColor, setTextColor] = useState('#00ffff');
  let [activePresenceColor, setActivePresenceColor] = useState('#00ffff');
  let [mentionBadgeColor, setMentionBadgeColor] = useState('#00ffff');
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

  function onColorChange(newColor, _, index, callback) {
    callback(newColor);
    var newTheme = props.theme;
    newTheme[index] = newColor;
    props.setTheme(newTheme);
  }

  return (
    <div className='dashboard'>
      {renderThemes(themes)}
      <ImageUpload />
      <div className="color-picker-container">
        <div>
        Column BG
        <ColorPicker color={columnBgColor} onChange={(newColor) => onColorChange(newColor, columnBgColor, 0, setColumnBgColor)} />
        </div>
        <div>
        Menu BG Hover
        <ColorPicker color={menuBgHoverColor} onChange={(newColor) => onColorChange(newColor, menuBgHoverColor, 1, setMenuBgHoverColor)} />
        </div>
        <div>
        Active Item
        <ColorPicker color={activeItemColor} onChange={(newColor) => onColorChange(newColor, activeItemColor, 2, setActiveItemColor)} />
        </div>
        <div>
        Active Item Text
        <ColorPicker color={activeItemTextColor} onChange={(newColor) => onColorChange(newColor, activeItemTextColor, 3, setActiveItemTextColor)} />
        </div>
        <div>
        Hover Item
        <ColorPicker color={hoverItemColor} onChange={(newColor) => onColorChange(newColor, hoverItemColor, 4, setHoverItemColor)} />
        </div>
        <div>
        Text Color
        <ColorPicker color={textColor} onChange={(newColor) => onColorChange(newColor, textColor, 5, setTextColor)} />
        </div>
        <div>
        Active Presence
        <ColorPicker color={activePresenceColor} onChange={(newColor) => onColorChange(newColor, activePresenceColor, 6, setActivePresenceColor)} />
        </div>
        <div>
        Mention Badge
        <ColorPicker color={mentionBadgeColor} onChange={(newColor) => onColorChange(newColor, mentionBadgeColor, 7, setMentionBadgeColor)} />
        </div>
      </div>

      
      <ColorInput />
    </div>
  );
}

export default DashBoard;