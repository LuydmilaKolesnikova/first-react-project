import s from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
  let posts = [
    { id: "1", message: "Hi!", likesCount: "0" },
    { id: "2", message: "How are you?", likesCount: "23" },
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <textarea></textarea>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default Posts;
