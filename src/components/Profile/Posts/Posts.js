import s from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
  return (
    <div className={s.posts}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message="Hi, how are you?" likesCount="0" />
      <Post message="It's my first post" likesCount="23" />
    </div>
  );
};

export default Posts;
