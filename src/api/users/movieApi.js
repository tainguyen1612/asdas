import axiosClient from './axiosClient';

const userMovieApi = {
  getAll: () => {
    const url = '/movies';
    return axiosClient.get(url);
  },

  getByState: (params) => {
    const url = '/movies';
    return axiosClient.get(url, { params });
  },

  getBySlug: (slug) => {
    const url = `/movies/detail/${slug}`;
    return axiosClient.get(url);
  },

  getShowtimes: (id, params) => {
    const url = `/movies/${id}/showtimes`;
    return axiosClient.get(url, { params });
  },

  getComment: (id) => {
    const url = `http://localhost:3004/comment?slug=${id}`;
    return axiosClient.get(url);
  },
};

export default userMovieApi;
