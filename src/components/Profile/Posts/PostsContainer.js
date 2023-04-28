import { addPost } from "../../../redux/profile-reducer";
import Posts from "./Posts";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const PostsContainer = connect(mapStateToProps, { addPost })(Posts);

export default PostsContainer;
