import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "antd/dist/antd.css";

import { BrowserRouter } from "react-router-dom";

/* Redux */
import { Provider } from "react-redux";
import configStore from "./redux/store";
/* Redux store, think this as the $scope in angular1 */
const store = configStore();

ReactDOM.render(
  // think this "Provider" as the top "parent" dom of everything
  // every "child" can connect to the "state" of this "parent"
  // the state here is the "store"
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
