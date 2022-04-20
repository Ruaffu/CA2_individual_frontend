import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import LoginPage from "./components/LoginPage";
import Cat from "./components/Cat";
import Books from "./components/Books";
import Bored from "./components/Bored";
import facade from "./apiFacade";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="login" element={<LoginPage/>} />
        <Route path="cat" element={<Cat/>} />
        <Route path="book" element={<Books />} />
        <Route path="bored" element={<Bored />} />
        <Route path="*" element={<NoMatch/>} />
    
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
