import { Routes, Route } from "react-router-dom";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Página inicial</h1>} />
      <Route path="/favoritos" element={<h1>Favoritos</h1>} />
    </Routes>
  );
}
