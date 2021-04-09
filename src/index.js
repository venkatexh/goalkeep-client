import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
