import Dialogs from "./Dialogs";
import { updateMessageText, sendMessage } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthNavigateComponent } from "../../hoc/withAuthNavigate";
import { compose } from "redux";

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});

export default compose(
  connect(mapStateToProps, {
    updateMessageText,
    sendMessage,
  }),
  withAuthNavigateComponent
)(Dialogs);
