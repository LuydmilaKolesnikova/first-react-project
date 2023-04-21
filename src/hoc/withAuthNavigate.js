import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isAuth: state.authPage.isAuth,
});

export const withAuthNavigateComponent = (Component) => {
  class authNavigateComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to="/login" />;
      return <Component {...this.props} />;
    }
  }

  return connect(mapStateToProps)(authNavigateComponent);
};
