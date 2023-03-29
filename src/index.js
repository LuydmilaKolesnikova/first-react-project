import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  addPost,
  updatePostText,
  updateMessageText,
  addMessage,
  subscribe,
} from "./redux/state";
import state from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderReactDOM = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updatePostText={updatePostText}
        updateMessageText={updateMessageText}
        addMessage={addMessage}
      />
    </React.StrictMode>
  );
};

rerenderReactDOM(state);

subscribe(rerenderReactDOM);
