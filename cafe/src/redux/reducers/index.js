import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import customerReducer from "./customerReducer";
import backlogReducer from "./backlogReducer";
export default combineReducers({
  orders: orderReducer,
  customers: customerReducer,
  backlogs: backlogReducer,
});
