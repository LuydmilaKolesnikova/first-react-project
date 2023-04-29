import { Field, reduxForm } from "redux-form";
import React from "react";
import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { FormControl } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { Navigate } from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css";

class Login extends React.Component {
  onSubmit = (formData) => {
    this.props.login(formData.email, formData.password, formData.rememberMe);
  };

  render() {
    if (this.props.isAuth) {
      return <Navigate to="/profile" />;
    }
    return (
      <>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={this.onSubmit} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authPage.isAuth,
});

export const LoginContainer = connect(mapStateToProps, { login })(Login);

const LoginForm = (props) => {
  console.log(props);
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={FormControl}
          child="input"
          validate={required}
          name="email"
          placeholder="email"
        />
      </div>
      <div>
        <Field
          component={FormControl}
          child="input"
          validate={required}
          name="password"
          placeholder="password"
          type="password"
        />
      </div>
      <div>
        <Field
          component={FormControl}
          child="input"
          type="checkbox"
          name="rememberMe"
        />
        Remember me
      </div>
      {props.error && (
        <div className={s.incorrectEmailPassword}>{props.error}</div>
      )}
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
