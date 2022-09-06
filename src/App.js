import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "src/pages/root/welcome";
import BrowseRoutes from "src/pages/browse/routes";
import SignIn from "./pages/root/signin";
import SignUp from "./pages/root/signup";

import { ThemeProvider } from "styled-components";
import rootReducer from "src/store/store";
import { createStore } from "redux";
import { Provider } from "react-redux";
// {
//     /* App.js 에선 어플리케이션 어디에서든 적용되어야 할 global한 설정들만 다룹니다. */
//     // 라우터 또한 각 페이지의 root가 되는 것들만 설정해주고 해당 페이지에서 navigate를 해주세요.
// }

const store = createStore(rootReducer);
const globalTheme = {
  color: {
    primary: "#c8c0c1",
    background: "#141414",
    point: "#8a0708",
  },
};
function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />}></Route>
            <Route path="/login/*" element={<SignIn />}></Route>
            <Route path="/login/signup" element={<SignUp />}></Route>
            <Route path="/browse/*" element={<BrowseRoutes />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
