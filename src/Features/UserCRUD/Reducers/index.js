import {
  GET_DATA_USER,
  GET_DETAIL_DATA_USER,
  IS_ERROR_USER,
} from "../../../Constant";

const initialState = {
  dataUser: [],
  dataDetailUser: {},
  isLoading: true,
  isError: false,
};

const UserReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_USER:
      return {
        ...state,
        dataUser: action.payload.data,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      };

    case IS_ERROR_USER:
      return {
        ...state,
        isError: action.payload.isError,
        isLoading: action.payload.isLoading,
      };

    case GET_DETAIL_DATA_USER:
      return {
        ...state,
        dataDetailUser: action.payload.dataDetail,
      };

    default:
      return state;
  }
};

export default UserReducers;
