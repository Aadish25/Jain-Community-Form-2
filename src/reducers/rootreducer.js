import { combineReducers } from "redux";
import SnackBar from "../reducers/snackbar/snackbar.js";
const rootReducer = combineReducers({
  snackbar: SnackBar,
});

export default rootReducer;
