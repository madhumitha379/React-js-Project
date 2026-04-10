import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Classroom from "../pages/Classroom";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/classroom" element={<Classroom />} />
    </Routes>
  );
}

export default AppRouter;