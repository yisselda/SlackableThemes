import React from 'react';
import Dropzone from 'react-dropzone';
import '../styles/image-upload.scss';
import ApiCommunicator from '../data/api-communicator';

const ImageUpload = ({ updateThemeColors }) => {
  const onDrop = async acceptedFiles => {
    let formData = new FormData();
    formData.append('file', acceptedFiles[0]);
    const themeJSON = await ApiCommunicator.generateThemeFromFile(formData);
    const theme = themeJSON.data.split(",")
    updateThemeColors(theme);
  }

  return (
    <div className="image-upload-container">
      <div className="image-upload">
        <Dropzone onDrop={onDrop}>
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              Click me to upload a file!
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default ImageUpload;