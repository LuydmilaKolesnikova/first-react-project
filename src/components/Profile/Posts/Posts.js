import s from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
  let postsData = [
    { id: "1", message: "Hi!", likesCount: "0" },
    { id: "2", message: "How are you?", likesCount: "23" },
  ];

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
        <Post
          message={postsData[0].message}
          likesCount={postsData[0].likesCount}
        />
        <Post
          message={postsData[1].message}
          likesCount={postsData[1].likesCount}
        />
      </div>
    </div>
  );
};

export default Posts;
