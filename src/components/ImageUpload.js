import React from 'react';
import Dropzone from 'react-dropzone';
import '../styles/image-upload.scss';
import ApiCommunicator from '../data/api-communicator';

const ImageUpload = ({ updateThemeColors }) => {
  const [file, setFile] = React.useState(null)

  const onDrop = async acceptedFiles => {
    let formData = new FormData();
    formData.append('file', acceptedFiles[0]);
    setFile(acceptedFiles[0])
    const themeJSON = await ApiCommunicator.generateThemeFromFile(formData);
    const theme = themeJSON.data.split(",")
    updateThemeColors(theme);
  }

  return (
    <div className="image-upload-container">
      <div className="image-upload">
        <Dropzone onDrop={onDrop} className="dropzone">
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()} className="image-input" >
              <input {...getInputProps()} />
              {
              file ?
              <img src={URL.createObjectURL(file)} alt={file.name} />
              : "Click me to upload a file!"
              }
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default ImageUpload;