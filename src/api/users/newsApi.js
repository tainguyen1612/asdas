import axiosClient from './axiosClient';

const userNewsApi = {
  getNewsAll: () => {
    const url = 'http://localhost:3004/news';
    return axiosClient.get(url);
  },

  getNewsDetail: (id) => {
    const url = `http://localhost:3004/news?id=${id}`;
    return axiosClient.get(url);
  },
};

export default userNewsApi;
