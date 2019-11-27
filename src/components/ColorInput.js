import React from 'react';
import '../styles/color-input.scss';

export default function ColorInput({ theme }){
  const copyToClipboard = (str, e) => {
    e.preventDefault();
    var promise = navigator.clipboard.writeText(str);
  }

  return (
    <div className='color-input'>
      <form>
        <input type="text" className="color-input-box" value={theme} readOnly/>
        <input type="submit" className="copy-button" value="Copy" onClick={(e) => copyToClipboard(theme, e)} />
      </form>
    </div>
  )
};
