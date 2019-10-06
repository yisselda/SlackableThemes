import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import './ColorPicker.css';

export default function ColorPicker({ label, onChange, color }) {
    let [shouldDisplay, setDisplay] = useState(false);

    const onColorChange = (e) => {
        const newValue = e.target.value;
        if (newValue.length > 7) return;
        if (newValue.length <= 1) { onChange('#'); return; };
        if (isValidHex(newValue[newValue.length - 1])) onChange(newValue);
    }

    const onColorPickChange = (newColor) => {
        onChange(newColor.hex);
    }

    const isValidHex = (str) => {
        return !!str.match(/[A-F|a-f|0-9]/g);
    }

    const handleDisplay = () => {
        setDisplay(!shouldDisplay)
    }

    return <div className="container">
        <span className="label">{label}</span>
        <div className="content">
            <div className="color-sq" onClick={handleDisplay} style={{ backgroundColor: color }}></div>
            <input className="color-input" type="text" value={color} onChange={onColorChange} />
        </div>
        {shouldDisplay && <ChromePicker className='color-picker' color={color} disableAlpha onChange={onColorPickChange} />}
        {shouldDisplay && <div className="click-outside-area" onClick={() => handleDisplay()}/>}
    </div>
}
