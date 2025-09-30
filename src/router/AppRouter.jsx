// src/router/AppRouter.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../page/home/Home';
// import Servicios from '../page/servicios/Servicios';
// import QuienesSomos from '../page/quienes/QuienesSomos';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* otras rutas aquí */}
    </Routes>
  );
}
