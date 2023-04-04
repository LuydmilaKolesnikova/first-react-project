import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";
import { Provider } from "./redux/StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderReactDOM = (state) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

rerenderReactDOM(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderReactDOM(state);
});
