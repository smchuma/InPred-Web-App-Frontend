import {
  CreateProject,
  Home,
  Login,
  Projects,
  Register,
  Results,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import Page404 from "./pages/404/Page404";
import "./App.css";
import { DashLayout, RequireAuth } from "./components";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<RequireAuth />}>
          <Route path="/projects/create" element={<CreateProject />} />
          <Route element={<DashLayout />}>
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<Results />} />
          </Route>
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
