import Dialogs from "./Dialogs";
import {
  updateMessageTextActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

/* const DialogsContainer = (props) => {
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
}; */

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = (dispatch) => ({
  updateMessageText: (text) => dispatch(updateMessageTextActionCreator(text)),
  sendNewMessage: () => dispatch(sendMessageActionCreator()),
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
