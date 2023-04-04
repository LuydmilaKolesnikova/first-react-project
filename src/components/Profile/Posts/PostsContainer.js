import React from "react";
import {
  updatePostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
  const state = props.store.getState();

  let updatePostText = (text) => {
    props.store.dispatch(updatePostTextActionCreator(text));
  };

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  return (
    <Posts
      posts={state.profilePage.posts}
      updatePostText={updatePostText}
      addPost={addPost}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default PostsContainer;
