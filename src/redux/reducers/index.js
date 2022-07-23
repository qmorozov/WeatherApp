import {combineReducers} from "redux";

import weather from "./weather";
import degree from "./degree";

const rootReducer = combineReducers({
    weather,
    degree
});

export default rootReducer;