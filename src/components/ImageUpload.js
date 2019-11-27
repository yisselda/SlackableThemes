import React from 'react';
import Dropzone from 'react-dropzone';
import '../styles/image-upload.scss';

const ImageUpload = (props) => {
  const onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
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