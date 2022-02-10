import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Topbar from "./components/topbar/Topbar";

const App = () => {
  return (
    <BrowserRouter>
    <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
