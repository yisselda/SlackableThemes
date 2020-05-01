import React, {useState} from 'react';
import '../styles/color-input.scss';

export default function ColorInput({ theme }){
  const copyToClipboard = (str, e) => {
    e.preventDefault();
    var promise = navigator.clipboard.writeText(str);
    setCopied(true);

    setTimeout(function(){setCopied(false)}, 1000);
  }

  const [copied, setCopied] = useState(false);
  return (
    <div className='color-input'>
      <form>
        <input type="text" className="color-input-box" value={theme} readOnly/>
        <input type="submit" className={copied ? "copy-button copied" : "copy-button"} value={copied ? "Copied !" : "Copy"} onClick={(e) => copyToClipboard(theme, e)} />
      </form>
    </div>
  )
};