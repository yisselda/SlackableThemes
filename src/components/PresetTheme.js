import React from 'react';
import '../styles/preset-theme.scss'

export default function PresetTheme(props) {
    const handleClick = () => {
        props.updateThemeColors(props.themeColors);
    }
    return (
        <label className="theme-label">
            <span className="theme-button"> 
                <input 
                    type="radio" 
                    className="input-radio"
                    name="sidebar-theme"
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
