import s from "./Posts.module.css";
import Post from "./Post/Post";
import React from "react";
import {
  updatePostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/state";

const Posts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let updatePostText = () => {
    props.dispatch(updatePostTextActionCreator(newPostElement.current.value));
  };

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <textarea
          onChange={updatePostText}
          ref={newPostElement}
          value={props.newPostText}
        ></textarea>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default Posts;
