import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AdminRoutes from './admin/adminRoutes';
import Home from "./Home";
import Create from "./Create";

import Update from "./Update";
import Delete from "./Delete";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/update" element={<Update />}></Route>

      <Route path="/delete" element={<Delete />}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
