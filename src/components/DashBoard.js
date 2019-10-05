import React from 'react';
import '../styles/dashboard.scss';
import PresetThemes from './PresetThemes';
import ImageUpload from './ImageUpload';
import ColorPickers from './ColorPickers';
import ColorInput from './ColorInput';

const DashBoard = () => {
  return(
    <div className='dashboard'>
      <PresetThemes />
      <ImageUpload />
      <ColorPickers />
      <ColorInput />
    </div>
  );
}

export default DashBoard;