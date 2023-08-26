import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Navbar from "./Navbar";
import Notfound from "./Notfound";
import EditUser from "./EditUser";
import UserDetail from "./UserDetail";
import CreateUser from "./CreateUser";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/user/add" element={<CreateUser />}></Route>
        <Route path="/user/edit/:id" element={<EditUser />}></Route>
        <Route path="/user/:id" element={<UserDetail />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
