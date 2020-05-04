import React from 'react';
import Circle from '@bit/joshk.react-spinners-css.circle';
import Dropzone from 'react-dropzone';
import '../styles/image-upload.scss';
import ApiCommunicator from '../data/api-communicator';

const ImageUpload = ({ updateThemeColors, loadingColor }) => {
  const [file, setFile] = React.useState(null);
  const [loadingVisibility, setLoadingVisibility]  = React.useState('hidden');

  const onDrop = async acceptedFiles => {
    setFile(acceptedFiles[0]);
    submitImage(acceptedFiles[0]);
  }

  const submitImage = async image => {
    setLoadingVisibility('visible');
    let formData = new FormData();
    formData.append('file', image);
    const themeJSON = await ApiCommunicator.generateThemeFromFile(formData);
    const theme = themeJSON.data.split(",");
    updateThemeColors(theme);
    setTimeout(() => setLoadingVisibility('hidden'), 1000);
  }

  const getOtherTheme = async => {
    submitImage(file);
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
                : "Click me to upload an image!"
              }
            </div>
          )}
        </Dropzone>
      </div>
      {
        file ?
        <div>
          <button className="resend-button" onClick={getOtherTheme}>Get another theme with the same image!</button>
          <Circle className="preview-spinner" color={loadingColor}  style={{ visibility: loadingVisibility }}/>
        </div>
        : null
      }
    </div>
  );
};

export default ImageUpload;