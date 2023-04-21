import Dialogs from "./Dialogs";
import { updateMessageText, sendMessage } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthNavigateComponent } from "../../hoc/withAuthNavigate";

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});

let authNavigateComponent = withAuthNavigateComponent(Dialogs);

const DialogsContainer = connect(mapStateToProps, {
  updateMessageText,
  sendMessage,
})(authNavigateComponent);

export default DialogsContainer;
