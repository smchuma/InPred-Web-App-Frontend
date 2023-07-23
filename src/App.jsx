import { Home, Login, Register } from "./pages";
import { Route, Routes } from "react-router-dom";
import Page404 from "./pages/404/Page404";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
