/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import '../styles/toggle-switch.scss'

export const ToggleSwitch = ({color, text, switchChange, className=''}) => {
    const usePropColor = css`
        input:checked + .slider  {
            background-color: ${color};
        }
    `
    const handleToggle = (e) => switchChange(e.target.checked)

    return(
        <div className={`toggle-switch ${className}`} css={usePropColor}>
            <span className='toggle-switch-text'>{text}</span>
            <label className='switch'>
                <input type='checkbox' onChange={handleToggle} />
                <span className='slider round' ></span>
            </label>
        </div>
    )
}