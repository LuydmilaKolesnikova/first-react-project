import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderReactDOM = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );
};

rerenderReactDOM(store.getState());

store.subscribe(rerenderReactDOM);
