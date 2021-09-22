import axiosClient from './axiosClient';

const adminAuthApi = {
  login: (data) => {
    const url = '/admin/auth/login';
    return axiosClient.post(url, data);
  },

  getInfo: (token) => {
    const url = '/admin/profile';
    return axiosClient.get(url, { headers: { Authorization: 'Bearer ' + token } });
  },
};

export default adminAuthApi;
