import Friends from "./Friends";
import StoreContext from "../../redux/StoreContext";

const FriendsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().sidebar;
        return <Friends friends={state.friends} />;
      }}
    </StoreContext.Consumer>
  );
};

export default FriendsContainer;
