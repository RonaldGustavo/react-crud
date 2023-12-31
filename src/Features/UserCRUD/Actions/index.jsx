import {
  ADD_NEW_USER,
  DELETE_DATA_USER,
  GET_DATA_USER,
  GET_DETAIL_DATA_USER,
  IS_ERROR_USER,
  IS_LOADING,
  IS_LOADING_DETAIL,
  UPDATE_DATA_USER,
} from "../../../Constant";
import {
  createUserService,
  deleteDataUserService,
  getDetailUserService,
  getListUsersService,
  updateDataUserService,
} from "../Services";

export const GetListUsersAction = () => {
  return async (dispatch) => {
    dispatch({
      type: IS_LOADING,
      payload: {
        isLoading: true,
      },
    });
    try {
      //   console.log("data action: ", data);
      const data = await getListUsersService();
      dispatch({
        type: GET_DATA_USER,
        payload: {
          data: data,
          isLoading: false,
        },
      });
    } catch (error) {
      //   console.log("error action getListUser: ", error.message);
      dispatch({
        type: IS_ERROR_USER,
        payload: {
          isError: error.message,
          isLoading: false,
        },
      });
    }
  };
};

export const getDetailUserAction = (id) => {
  return async (dispatch) => {
    dispatch({
      type: IS_LOADING_DETAIL,
      payload: {
        isLoadingDetail: true,
      },
    });
    try {
      const data = await getDetailUserService(id);
      console.log("data detail:", data);

      dispatch({
        type: GET_DETAIL_DATA_USER,
        payload: {
          dataDetail: data,
        },
      });
    } catch (error) {
      console.log("error action getDetailUser: ", error.message);
      dispatch({
        type: IS_ERROR_USER,
        payload: {
          isError: error.message,
          isLoading: false,
        },
      });
    }
  };
};

export const CreateNewUserAction = (body) => {
  return async (dispatch) => {
    try {
      const data = await createUserService(body);
      console.log("data baru:", data);
      dispatch({
        type: ADD_NEW_USER,
        payload: {
          newData: data,
        },
      });
    } catch (error) {
      console.log("error action create user: ", error.message);
      dispatch({
        type: IS_ERROR_USER,
        payload: {
          isError: error.message,
          isLoading: false,
        },
      });
    }
  };
};

export const deleteUserDataAction = (id) => {
  return async (dispatch) => {
    try {
      const data = await deleteDataUserService(id);
      console.log("data dihapus:", data);
      dispatch({
        type: DELETE_DATA_USER,
        payload: {
          deletedUserId: id,
        },
      });
    } catch (error) {
      console.log("error action delete user: ", error.message);
      dispatch({
        type: IS_ERROR_USER,
        payload: {
          isError: error.message,
          isLoading: false,
        },
      });
    }
  };
};

export const updateUserAction = (id, body) => {
  return async (dispatch) => {
    try {
      const data = await updateDataUserService(id, body);
      console.log("update data:", data);
      dispatch({
        type: UPDATE_DATA_USER,
        payload: {
          updateData: data,
        },
      });
    } catch (error) {
      console.log("error action create user: ", error.message);
      dispatch({
        type: IS_ERROR_USER,
        payload: {
          isError: error.message,
          isLoading: false,
        },
      });
    }
  };
};
