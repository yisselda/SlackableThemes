import React from 'react';
import Dropzone from 'react-dropzone';
import '../styles/image-upload.scss';
import ApiCommunicator from '../data/api-communicator';

const generateThemeFromFile = async fileFormData => {
  try {
    const theme = await ApiCommunicator.sendData(
      `https://gen-slack-theme.herokuapp.com/create-theme`,
      fileFormData,
      {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
      }
    );
    return theme;
  } catch (error) {
    console.log(error.message);
  }
};

const ImageUpload = ({ updateThemeColors }) => {
  const onDrop = async acceptedFiles => {
    let formData = new FormData();
    formData.append('file', acceptedFiles[0]);
    const themeJSON = await generateThemeFromFile(formData);
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