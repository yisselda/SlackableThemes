import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import './ColorPicker.css'


export default function ColorPicker(hex) {
    let [color, setColor] = useState('#000');

    const onColorChange = (e) => {
        let newValue = e.target.value;
        if (color.length === 7 && newValue.length >= 6) return;
        if (newValue.length <= 1) { setColor('#'); return; };
        if (isValid(newValue[newValue.length - 1])) setColor(newValue);
    }

    const isValid = (str) => {
        return !!str.match(/[A-F|a-f|0-9]/g);
    }

    return <div className="container">
        <span className="label">Color Picker</span>
        <div className="content">
            <div className="color-sq" style={{ backgroundColor: color }}></div>
            <input className="color-input" type="text" value={color} onChange={onColorChange} />
        </div>
    </div>
}
