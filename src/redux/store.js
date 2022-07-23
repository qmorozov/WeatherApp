import {createStore} from "redux";
import rootReducer from "./reducers";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

window.store = store;

export default store;