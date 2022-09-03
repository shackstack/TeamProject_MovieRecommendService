import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MoviePosting from "../pages/MoviePosting";
const Router = () => {
  return (
    <BrowserRouter>
      <li>
        <Link to="/moviepost">
          <button>Post</button>
        </Link>
      </li>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/moviepost" element={<MoviePosting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
