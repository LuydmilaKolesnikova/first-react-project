import Dialogs from "./Dialogs";
import {
  updateMessageTextActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
  const state = props.store.getState().dialogsPage;

  const updateMessageText = (text) => {
    props.store.dispatch(updateMessageTextActionCreator(text));
  };

  const sendNewMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  return (
    <Dialogs
      updateMessageText={updateMessageText}
      sendNewMessage={sendNewMessage}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
