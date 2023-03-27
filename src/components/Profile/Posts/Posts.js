import s from "./Posts.module.css";
import Post from "./Post/Post";
import React from "react";

const Posts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    alert(newPostElement.current.value);
  };

  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <textarea ref={newPostElement}></textarea>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default Posts;
