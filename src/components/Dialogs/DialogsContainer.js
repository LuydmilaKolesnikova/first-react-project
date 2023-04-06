import Dialogs from "./Dialogs";
import {
  updateMessageTextActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = (dispatch) => ({
  updateMessageText: (text) => dispatch(updateMessageTextActionCreator(text)),
  sendNewMessage: () => dispatch(sendMessageActionCreator()),
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
