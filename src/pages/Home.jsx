import React from "react";
import MoviePosting from "../components/posting/MoviePosting";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button>post</button>
      <div>
        <MoviePosting />
        <button>Post</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default Home;
