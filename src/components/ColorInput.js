import React from 'react';
import '../styles/color-input.scss';

export default function ColorInput({ theme }){
  return (
    <div className='color-input'>
      <h2 className='color-input-title'>Copy and paste these values to share your custom theme with others</h2>
      <form>
        <input type="text" name="color-input-box" value={theme} readOnly/>
        <input type="submit" value="Copy" />
      </form>
    </div>
  )
};
