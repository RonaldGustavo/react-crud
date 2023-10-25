import {
  GET_DATA_USER,
  GET_DETAIL_DATA_USER,
  IS_ERROR_USER,
} from "../../../Constant";
import { getDetailUserService, getListUsersService } from "../Services";

export const GetListUsersAction = () => {
  return async (dispatch) => {
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
