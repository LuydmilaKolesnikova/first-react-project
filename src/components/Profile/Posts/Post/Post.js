import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
        <img src="https://mobimg.b-cdn.net/v3/fetch/a6/a63bc8cb733fc3451bc8fe6608d63046.jpeg?w=1600"></img>
        {props.message}
      </div>
      <span>like {props.likesCount}</span>
    </div>
  );
};

export default Post;
