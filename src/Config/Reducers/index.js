import { combineReducers } from "redux";
import UserReducers from "../../Features/UserCRUD/Reducers";

export default combineReducers({
  users: UserReducers,
});
