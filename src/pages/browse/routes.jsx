import { Route, Routes } from "react-router-dom";
import BrowseMain from "./route/main";
import MoviePosting from "../root/movieposting";

const BrowseRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BrowseMain />}></Route>
        <Route path="/create" element={<MoviePosting />}></Route>
      </Routes>
    </>
  );
};

export default BrowseRoutes;
