import React from "react";
import Header from "./Header";
import { getAuthUserData } from "../../redux/auth-reducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapstateToProps = (state) => ({
  userId: state.authPage.userId,
  login: state.authPage.login,
  email: state.authPage.email,
  isAuth: state.authPage.isAuth,
});

export default connect(mapstateToProps, { getAuthUserData })(HeaderContainer);
