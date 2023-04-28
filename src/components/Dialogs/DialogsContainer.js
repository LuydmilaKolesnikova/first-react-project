import Dialogs from "./Dialogs";
import { sendMessage } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthNavigateComponent } from "../../hoc/withAuthNavigate";
import { compose } from "redux";

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});

export default compose(
  connect(mapStateToProps, {
    sendMessage,
  }),
  withAuthNavigateComponent
)(Dialogs);
