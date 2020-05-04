import React, {useState} from 'react';
import '../styles/color-input.scss';

export default function ColorInput({ theme }){
  const copyToClipboard = (e) => {
    e.preventDefault();
    var promise = navigator.clipboard.writeText(theme);
    setCopied(true);

    setTimeout(function(){setCopied(false)}, 1000);
  }

  const [copied, setCopied] = useState(false);
  return (
    <div className='color-input'>
      <input type="text" className="color-input-box" value={theme} readOnly/>
      <button 
        className={copied ? "copy-button copied" : "copy-button"}
        onClick={(e) => copyToClipboard(e)}>
          {copied ? "Copied !" : "Copy"}
      </button>
    </div>
  )
};