import { Routes, Route } from "react-router-dom";
import AppBuilder from "./AppBuilder";
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<AppBuilder />} />
    </Routes>
  );
}

export default AppRouter;
