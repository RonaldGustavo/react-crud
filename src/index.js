import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PublicRoutes from "./Config/Routes/PublicRoutes";
import { applyMiddleware, compose, legacy_createStore } from "redux";

import Reducers from "./Config/Reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";

//Boostrap
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "/node_modules/bootstrap/dist/js/bootstrap";

const store = legacy_createStore(Reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer position="top-right" autoClose={3000} />
      <PublicRoutes />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
