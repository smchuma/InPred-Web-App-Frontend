import {
  Home,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Page404 from "./pages/404/Page404";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
