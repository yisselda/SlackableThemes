import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import '../styles/color-picker.scss';

export default function ColorPicker({ label, onChange, color }) {
    let [shouldDisplay, setDisplay] = useState(false); 

    const onColorChange = (e) => {
        const newValue = e.target.value;
        if (newValue.length <= 1) { onChange('#'); return; };
        if (isValidHex(newValue)) onChange(newValue);
    }

    const onColorPickChange = (newColor) => {
        onChange(newColor.hex);
    }

    const isValidHex = (str) => {
        let result = str.match(/[A-F|a-f|0-9]/g);
        if (!result) return false;
        return result.length + 1 === str.length;
    }

    const handleDisplay = () => {
        setDisplay(!shouldDisplay)
    }

    useEffect(() => {
        if (color[0] !== "#") onChange('#' + color);
    }, [])

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
