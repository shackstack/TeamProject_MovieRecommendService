import { Route, Routes } from "react-router-dom";
import BrowseMain from "./route/main";

const BrowseRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<BrowseMain />}></Route>
            </Routes>
        </>
    );
};

export default BrowseRoutes;
