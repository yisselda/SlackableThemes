import React from 'react';
import '../styles/preset-theme.scss'

export default function PresetThemes({ theme, image, updateThemeColors, themeColors }) {
    const handleClick = () => {
        updateThemeColors(themeColors);
    }

    return (
        <label className="theme-label">
            <span className="theme-button"> 
                <input
                    data-theme={theme} 
                    type="radio" 
                    className="input-radio"
                    name="sidebar-theme"
                    onClick={handleClick}
                />
            </span>
            <span className="theme-text">
                {theme}
                <br/>
                <img className="theme-thumb" src={image} alt={theme}></img>
            </span>
        </label>
    );
}
