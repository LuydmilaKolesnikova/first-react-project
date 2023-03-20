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
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
