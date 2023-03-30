import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderReactDOM = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        updatePostText={store.updatePostText.bind(store)}
        addPost={store.addPost.bind(store)}
        updateMessageText={store.updateMessageText.bind(store)}
        addMessage={store.addMessage.bind(store)}
      />
    </React.StrictMode>
  );
};

rerenderReactDOM(store.getState());

store.subscribe(rerenderReactDOM);
