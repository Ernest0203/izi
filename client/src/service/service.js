import Api from './api';

export default {
  writeStream: data => {
    const api = new Api();
    return api.query('post', `streams`, data);
  },
  readStream: () => {
    const api = new Api();
    return api.query('get', `streams`);
  },
};
