import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost } from "./redux/state";
import { updatePostText } from "./redux/state";
import { updateMessageText } from "./redux/state";
import { addMessage } from "./redux/state";

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
