import s from "./Posts.module.css";
import Post from "./Post/Post";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormControl } from "../../common/FormsControls/FormsControls";
import { required } from "../../../utils/validators/validators";
import { maxLengthCreator } from "../../../utils/validators/validators";

const Posts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} key={p.id} likesCount={p.likesCount} />
  ));

  const onSubmit = (formData) => {
    props.addPost(formData.postText);
  };

  return (
    <div className={s.postsBlock}>
      My posts
      <PostReduxForm onSubmit={onSubmit} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const PostForm = (props) => {
  const maxLength10 = maxLengthCreator(10);
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={FormControl}
        child="textarea"
        name="postText"
        placeholder="write a post..."
        validate={[required, maxLength10]}
      />
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const PostReduxForm = reduxForm({ form: "postForm" })(PostForm);

export default Posts;
