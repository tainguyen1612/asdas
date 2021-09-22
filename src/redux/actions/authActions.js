import userAuthApi from '../../api/users/authApi';
import adminAuthApi from '../../api/admin/authApi';

export const setAccessToken = (token) => ({
  type: 'ACCESS_TOKEN',
  payload: token,
});

export const loginAction = (data) => async (dispatch) => {
  try {
    const response = await userAuthApi.login(data);
    console.log(response.data);
    if (response.data.user) {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: response.data,
      });
    } else {
      dispatch({
        type: 'LOGIN_FAIL',
        payload: response.data.error,
      });
    }
  } catch (error) {
    dispatch({
      type: 'LOGIN_FAIL',
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const getUserInfoAction = () => async (dispatch, getState) => {
  try {
    let { accessToken } = getState().auth;
    const response = await userAuthApi.getUserInfo(accessToken);
    if (!response.data.error) {
      dispatch({
        type: 'GET_USER_INFO_SUCCESS',
        payload: response.data,
      });
    } else {
      dispatch({
        type: 'GET_USER_INFO_FAIL',
        payload: response.data.error,
      });
    }
  } catch (error) {
    dispatch({
      type: 'GET_USER_INFO_FAIL',
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const updateProfileAction = (data) => async (dispatch, getState) => {
  try {
    let { accessToken } = getState().auth;
    await userAuthApi.updateUserInfo(data, accessToken);
    const response = await userAuthApi.getUserInfo(accessToken);
    if (!response.error) {
      dispatch({
        type: 'UPDATE_PROFILE_SUCCESS',
        payload: response.data,
      });
    } else {
      dispatch({
        type: 'UPDATE_PROFILE_FAIL',
        payload: response.data.error,
      });
    }
  } catch (error) {
    dispatch({
      type: 'UPDATE_PROFILE_FAIL',
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const registerAction = (data) => async (dispatch) => {
  try {
    const response = await userAuthApi.register(data);
    if (!response.data.error) {
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: data.email,
      });
    } else {
      dispatch({
        type: 'REGISTER_FAIL',
        payload: response.error,
      });
    }
  } catch (error) {
    dispatch({
      type: 'REGISTER_FAIL',
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const verifyEmailAction = (data) => async (dispatch) => {
  try {
    const response = await userAuthApi.verifyEmail(data);
    if (!response.data.error) {
      dispatch({
        type: 'VERIFY_EMAIL_SUCCESS',
        payload: true,
      });
    } else {
      dispatch({
        type: 'VERIFY_EMAIL_FAIL',
        payload: response.data.error,
      });
    }
  } catch (error) {
    dispatch({
      type: 'VERIFY_EMAIL_FAIL',
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const forgotPasswordAction = (data) => async (dispatch) => {
  try {
    const response = await userAuthApi.forgotPassword(data);
    if (!response.data.error) {
      dispatch({
        type: 'FORGOT_PASSWORD_SUCCESS',
        payload: data.email,
      });
    } else {
      dispatch({
        type: 'FORGOT_PASSWORD_FAIL',
        payload: response.data.error,
      });
    }
  } catch (error) {
    dispatch({
      type: 'FORGOT_PASSWORD_FAIL',
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const verifyCodeResetPasswordAction = (data) => async (dispatch) => {
  try {
    const response = await userAuthApi.verifyCodeResetPassword(data);
    if (!response.data.error) {
      dispatch({
        type: 'VERIFY_CODE_RESET_PASSWORD_SUCCESS',
        payload: true,
      });
    } else {
      dispatch({
        type: 'VERIFY_CODE_RESET_PASSWORD_FAIL',
        payload: response.data.error,
      });
    }
  } catch (error) {
    dispatch({
      type: 'VERIFY_CODE_RESET_PASSWORD_FAIL',
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const resetPasswordAction = (data) => async (dispatch) => {
  try {
    const response = await userAuthApi.resetPassword(data);
    if (!response.data.error) {
      dispatch({
        type: 'RESET_PASSWORD_SUCCESS',
        payload: true,
      });
    } else {
      dispatch({
        type: 'RESET_PASSWORD_FAIL',
        payload: response.data.error,
      });
    }
  } catch (error) {
    dispatch({
      type: 'VERIFY_CODE_RESET_PASSWORD_FAIL',
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const changePasswordAction = (data, history) => async (dispatch, getState) => {
  try {
    let { accessToken } = getState().auth;
    const response = await userAuthApi.changePassword(data, accessToken);
    if (!response.data.error) {
      dispatch({
        type: 'CHANGE_PASSWORD_SUCCESS',
      });
      history.push('/');
    } else {
      dispatch({
        type: 'CHANGE_PASSWORD_FAIL',
        payload: response.data.error,
      });
    }
  } catch (error) {
    dispatch({
      type: 'CHANGE_PASSWORD_FAIL',
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const logoutAction = () => async (dispatch) => {
  dispatch({
    type: 'LOGOUT',
  });
};

// admin

export const login = (data, history) => async (dispatch) => {
  try {
    const response = await adminAuthApi.login(data);
    if (response.data.admin) {
      dispatch({
        type: 'LOGIN_ADMIN_SUCCESS',
        payload: response.data.admin,
      });
      history.push('/dashboard');
    } else {
      dispatch({
        type: 'LOGIN_FAIL',
        payload: response.data.error,
      });
    }
  } catch (error) {
    dispatch({
      type: 'LOGIN_FAIL',
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: 'LOGOUT',
  });
};
