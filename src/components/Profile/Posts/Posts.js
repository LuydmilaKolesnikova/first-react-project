import s from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <textarea></textarea>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" likesCount="0" />
        <Post message="It's my first post" likesCount="23" />
      </div>
    </div>
  );
};

export default Posts;
