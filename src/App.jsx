import {
  About,
  Contact,
  Features,
  Home,
  Login,
  Pricing,
  Register,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Analyze,
  HomePage,
  Reports,
  Settings,
  Visualization,
} from "./pages/Dashboard";
import Layout from "./components/Layout/Layout";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import DashLayout from "./components/DashComps/DashLayout/DashLayout";
import Page404 from "./pages/404/Page404";
import AnalyzeCard from "./pages/Dashboard/Analyze/AnalyzeCard/AnalyzeCard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<DashLayout />}>
            <Route path="/dashboard" element={<HomePage />} />
            <Route path="visualize" element={<Visualization />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
            <Route path="analyze" element={<Analyze />} />
            <Route path="analyze/:id" element={<AnalyzeCard />} />
          </Route>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
