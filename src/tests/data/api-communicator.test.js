import axios from 'axios';
import ApiCommunicator from '../../data/api-communicator';

jest.mock('axios');

describe('/src/data/api-communicator.test.js', () => {
  const url = 'https://url.com';

  describe('getData', () => {
    it('gets data from url', async () => {
      const axiosGetResponse = { data: ['a', 'b'] };
      axios.get.mockImplementation(() => Promise.resolve(axiosGetResponse));

      const response = await ApiCommunicator.getData(url);

      expect(axios.get).toHaveBeenCalledWith(url);
      expect(response).toEqual(axiosGetResponse);
    });
  });

  describe('sendData', () => {
    const params = { some: 'params' };

    it('post params to url with axios and return a promise', async () => {
      const axiosPostResponse = { data: { results: 'some results' } };
      axios.post.mockImplementation(() => Promise.resolve(axiosPostResponse));

      const response = await ApiCommunicator.sendData(url, params);

      expect(axios.post).toHaveBeenCalledWith(url, params);
      expect(response).toEqual(axiosPostResponse);
    });
  });
});