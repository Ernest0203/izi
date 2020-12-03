import Api from './api';

export default {
  getNotes: () => {
    const api = new Api();
    return api.query('get', `notes`);
  },
  createNote: data => {
    const api = new Api();
    return api.query('post', `notes`, data);
  },
  removeNote: data => {
    const api = new Api();
    return api.query('delete', `notes`, { data: { _id: data } });
  },
};
