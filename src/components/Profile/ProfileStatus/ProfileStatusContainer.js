import React from "react";
import { connect } from "react-redux";

class ProfileStatusContainer extends React.Component {
  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({ editMode: true })
  }

  deactivateEditMode = () => {
    this.setState({ editMode: false })
  }

  render() {
    return <>
      {!this.state.editMode && <div><span onDoubleClick={this.activateEditMode}>{this.props.status}</span></div>}
      {this.state.editMode && <div><input autoFocus onBlur={this.deactivateEditMode} value={this.props.status}></input></div>}

    </>
  }
}

const mapStateToProps = (state) => ({
  status: state.profilePage.status,
});

export default connect(mapStateToProps)(ProfileStatusContainer);
