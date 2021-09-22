import userNewsApi from '../../api/users/newsApi';

export const getAllNews = () => async (dispatch) => {
  try {
    const response = await userNewsApi.getNewsAll();
    dispatch({
      type: 'GET_NEWS_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDetailNews = (id) => async (dispatch) => {
  try {
    const response = await userNewsApi.getNewsDetail(id);
    dispatch({
      type: 'GET_DETAIL_NEWS',
      payload: response.data[0],
    });
  } catch (error) {
    console.log(error);
  }
};
