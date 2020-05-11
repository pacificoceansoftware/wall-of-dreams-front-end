import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import configureStore from "./store/index";
import {Provider} from "react-redux";

const store = configureStore();

ReactDOM.render(
    <Provider store = {store}>
    <App/>
    </Provider>
    , document.getElementById("root") as HTMLElement);
    