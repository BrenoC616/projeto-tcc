import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}
