import React from 'react';
import '../styles/PresetThemes.scss';

export default function PresetThemes(props) {
    const handleClick = () => {
        var newThemeColors = props.themeColors;
        return props.setThemeColors(newThemeColors);
    }
    return (
        <label className="theme-label">
            <span className="theme-button">
                <input 
                    className="input-radio"
                    name="sidebar-theme"
                    type="radio" 
                    onClick={handleClick}
                />
            </span>
            <span className="theme-text">
                {props.theme}
                <br/>
                <img className="theme-thumb" src={props.image} alt={props.theme}></img>
            </span>
        </label>
    );
}
