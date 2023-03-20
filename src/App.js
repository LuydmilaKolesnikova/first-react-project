import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <BrowserRouter>
          <Routes>
            <Route path="/dialogs" element={<Dialogs />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path="/music" element={<Music />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
