import React from 'react';
import PresetThemes from './PresetThemes';
import ImageUpload from './ImageUpload';
import ColorPickers from './ColorPickers';
import ColorsInput from './ColorsInput';

const DashBoard = () => {
  return(
    <div className='dashboard'>
      <PresetThemes />
      <ImageUpload />
      <ColorPickers />
      <ColorsInput />
    </div>
  );
}

export default DashBoard;