import Dialogs from "./Dialogs";
import {
  updateMessageTextActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogs-reducer";
import StoreContext from "../../redux/StoreContext";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().dialogsPage;

        const updateMessageText = (text) => {
          store.dispatch(updateMessageTextActionCreator(text));
        };

        const sendNewMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };
        return (
          <Dialogs
            updateMessageText={updateMessageText}
            sendNewMessage={sendNewMessage}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
