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
      <Post message="Hi, how are you?" cntlikes="1" />
      <Post message="It's my first post" cntlikes="2" />
    </div>
  );
};

export default Posts;
