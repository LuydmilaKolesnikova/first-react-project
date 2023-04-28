import React from "react";
import Header from "./Header";
import { getAuthUserData, login, logout } from "../../redux/auth-reducer";
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
  userId: state.authPage.id,
  loginName: state.authPage.login,
  email: state.authPage.email,
  isAuth: state.authPage.isAuth,
});

export default connect(mapstateToProps, { getAuthUserData, login, logout })(
  HeaderContainer
);
