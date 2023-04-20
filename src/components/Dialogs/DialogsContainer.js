import Dialogs from "./Dialogs";
import { updateMessageText, sendMessage } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});

const DialogsContainer = connect(mapStateToProps, {
  updateMessageText,
  sendMessage,
})(Dialogs);

export default DialogsContainer;
