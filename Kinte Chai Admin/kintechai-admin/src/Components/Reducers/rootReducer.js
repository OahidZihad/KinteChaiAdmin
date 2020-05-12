import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import categoryPageReducer from "./categoryPageReducer";

const DEFAULT_REDUCER = (initstate, action) => {
  return {
    key: "HELLOW WORLD",
  };
};

const rootReducer = combineReducers({
  DEFAULT: DEFAULT_REDUCER,
  categories: categoryReducer,
  categoryPages: categoryPageReducer,
});

export default rootReducer;
