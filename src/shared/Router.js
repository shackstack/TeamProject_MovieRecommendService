import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <ul>
        <Link to="/">
          <button>Home</button>
        </Link>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
