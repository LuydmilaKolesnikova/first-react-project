import {
  updatePostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  updatePostText: (text) => dispatch(updatePostTextActionCreator(text)),
  addPost: () => dispatch(addPostActionCreator()),
});

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
