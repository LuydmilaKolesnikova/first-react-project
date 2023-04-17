import React from "react";
import Header from "./Header";
import { setAuthUserData } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import axios from "axios";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        let { email, id, login } = response.data.data;
        this.props.setAuthUserData(id, email, login);
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapstateToProps = (state) => ({
  userId: state.auth.userId,
  login: state.auth.login,
  email: state.auth.email,
  isAuth: state.auth.isAuth,
});

export default connect(mapstateToProps, { setAuthUserData })(HeaderContainer);
