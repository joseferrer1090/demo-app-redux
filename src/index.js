import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";

import rootReducers from "./reducers";
import { addCharacterById } from "./actions";

const store = createStore(rootReducers);

// console.log("store.getState()", store.getState());
// store.subscribe(() => console.log("store", store.getState()));
store.dispatch(addCharacterById());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
