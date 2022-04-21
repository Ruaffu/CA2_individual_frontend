import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect} from "react";
import "./styles/App.css";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import LoginPage from "./components/LoginPage";
import Cat from "./components/Cat";
import Books from "./components/Books";
import Bored from "./components/Bored";
import Header from "./components/Header";
import facade from "./apiFacade";
import AddBooks from "./components/AddBooks";


export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  function user() {
    const [dataFromServer, setDataFromServer] = useState("Loading...")
  
    useEffect(() => {
      facade.fetchUserInfo().then(data => setDataFromServer(data));
    }, [])
  
    return (
      <div>
        <h3 >Hello {dataFromServer.userName}</h3>
      </div>
    )
  }
 
  return (
    <div>
       <BrowserRouter>
       <Header loggedIn={loggedIn} user={user}/>
    <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="login" element={<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="cat" element={<Cat/>} />
        <Route path="book" element={<Books loggedIn={loggedIn} />} />
        <Route path="addbook" element={<AddBooks loggedIn={loggedIn} />} />
        <Route path="bored" element={<Bored />} />
        <Route path="*" element={<NoMatch/>} />
      
    </Routes>
  </BrowserRouter>,
    </div>
  );
}
