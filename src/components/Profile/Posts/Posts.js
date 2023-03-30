import s from "./Posts.module.css";
import Post from "./Post/Post";
import React from "react";

const Posts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let updatePostText = () => {
    props.dispatch({
      type: "UPDATE-POST-TEXT",
      text: newPostElement.current.value,
    });
  };

  let addPost = () => {
    props.dispatch({ type: "ADD-POST" });
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
