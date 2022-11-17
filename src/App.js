//import "./App.css";
import styledash from "./assets/styles/styledash.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./view/Register";
import Login from "./view/Login";
import Home from "./view/Home";
import DashboardMain from "./view/DashboardMain";

function App() {
  return (
    <div className={styledash.appPrinci}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<DashboardMain />} />
        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
