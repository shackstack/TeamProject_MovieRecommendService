import React from "react";
import Home from "../../pages/Home";
import { Link } from "react-router-dom";

const MoviePosting = () => {
  return (
    <div>
      <h2>Title</h2>
      <input></input>
      <h2>URL</h2>
      <input></input>
      <h2>Content</h2>
      <input></input>
      <div>
        <Link to="/">
          <button>제출</button>
        </Link>
        <Link to="/">
          <button>닫기</button>
        </Link>
      </div>

      <Home />
    </div>
  );
};

export default MoviePosting;
