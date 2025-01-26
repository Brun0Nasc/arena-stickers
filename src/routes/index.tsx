import { Routes, Route } from "react-router-dom";
import { Favoritos } from "../pages/Favoritos";
import { Home } from "../pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favoritos" element={<Favoritos />} />
    </Routes>
  );
}
