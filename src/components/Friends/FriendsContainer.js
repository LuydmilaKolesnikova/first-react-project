import Friends from "./Friends";
import { connect } from "react-redux";

/* const FriendsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().sidebar;
        return <Friends friends={state.friends} />;
      }}
    </StoreContext.Consumer>
  );
}; */

const mapStateToProps = (state) => ({
  friends: state.sidebar.friends,
});

const mapDispatchToProps = (dispatch) => ({});

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
