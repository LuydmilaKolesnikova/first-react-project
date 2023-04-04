import React from "react";
import {
  updatePostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../redux/StoreContext";
import Posts from "./Posts";

const PostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        let updatePostText = (text) => {
          store.dispatch(updatePostTextActionCreator(text));
        };

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        return (
          <Posts
            posts={state.profilePage.posts}
            updatePostText={updatePostText}
            addPost={addPost}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default PostsContainer;
