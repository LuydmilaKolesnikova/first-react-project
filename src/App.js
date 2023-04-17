import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
  return (
    <BrowserRouter>
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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
