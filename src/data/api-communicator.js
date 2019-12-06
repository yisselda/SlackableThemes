import axios from 'axios';

class ApiCommunicator {
  getData(url, params = null) {
    return params ? axios.get(url, { params }) : axios.get(url);
  }

  sendData(url, params, config = null) {
    return config ? axios.post(url, params, config) : axios.post(url, params);
  }
}

export default new ApiCommunicator();