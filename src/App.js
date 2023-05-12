import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { HashRouter, Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { LoginContainer } from "./components/Login/Login";
import { initialize } from "./redux/app-reducer";
import { connect } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <HashRouter basename="/">
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/dialogs/*" element={<DialogsContainer />}></Route>
              <Route path="/profile/*" element={<ProfileContainer />}></Route>
              <Route path="/news" element={<News />}></Route>
              <Route path="/music" element={<Music />}></Route>
              <Route path="/settings" element={<Settings />}></Route>
              <Route path="/users" element={<UsersContainer />}></Route>
              <Route path="/login" element={<LoginContainer />}></Route>
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initialize })(App);
