import React from "react";
import {
  updatePostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import { connect } from "react-redux";

/* const PostsContainer = (props) => {
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
}; */

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  updatePostText: (text) => dispatch(updatePostTextActionCreator(text)),
  addPost: () => dispatch(addPostActionCreator()),
});

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
