import React from 'react';
import '../styles/dashboard.scss';
import PresetThemes from './PresetThemes';
import ImageUpload from './ImageUpload';
import ColorPicker from './ColorPicker';
import ColorInput from './ColorInput';

const DashBoard = () => {
  return(
    <div className='dashboard'>
      <PresetThemes />
      <ImageUpload />
      <ColorPicker />
      <ColorInput />
    </div>
  );
}

export default DashBoard;