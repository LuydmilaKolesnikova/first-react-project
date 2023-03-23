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
  let posts = [
    { id: "1", message: "Hi!", likesCount: "11" },
    { id: "2", message: "How are you?", likesCount: "23" },
  ];
  let dialogs = [
    { id: "1", name: "Alina" },
    { id: "2", name: "Slava" },
    { id: "3", name: "Karolina" },
    { id: "4", name: "Vlad" },
    { id: "5", name: "Anna" },
  ];
  let messages = [
    { id: "1", message: "Hi!" },
    { id: "2", message: "How are you?" },
    { id: "3", message: "What's up!" },
  ];

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={<Dialogs dialogs={dialogs} messages={messages} />}
            ></Route>
            <Route path="/profile" element={<Profile posts={posts} />}></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path="/music" element={<Music />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
