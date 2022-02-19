import Login from "../pages/Login";
import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import { Feed } from "../pages/Feed";
import { Profile } from "../pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/feed" element={<Feed />} />
          <Route exact path="/profile/*" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
