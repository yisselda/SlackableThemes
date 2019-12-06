import axios from 'axios';
import api from './api-endpoints';

class ApiCommunicator {
  getData(url, params = null) {
    return params ? axios.get(url, { params }) : axios.get(url);
  }

  sendData(url, params, config = null) {
    return config ? axios.post(url, params, config) : axios.post(url, params);
  }

  generateThemeFromFile = async fileFormData => {
    try {
      const theme = await this.sendData(
        api.create_theme,
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
}

export default new ApiCommunicator();