// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../page/home/Home";
import Service from "../page/services/service";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Service />} />
      <Route path="/Services/:serviceTitle" element={<Service />} />
    </Routes>
  );
}
