import React from 'react';
import '../styles/color-input.scss';

export default function ColorInput({ theme }){
  return (
    <div className='color-input'>
      <h2 className='color-input-title'>Copy and paste these values to share your custom theme with others</h2>
      <form>
        <input type="text" className="color-input-box" value={theme} readOnly/>
        <input type="submit" className="copy-button" value="Copy" />
      </form>
    </div>
  )
};
