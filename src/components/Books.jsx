import { Link, Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import facade from "../apiFacade";
import "../styles/Books.css";

export default function Books() {
    const [books, setBooks] = useState([]);


    function getBooks() {
        facade.fetchBook().then(data => setBooks(data));
    
    } 
    
    const getToken = () => {
        return localStorage.getItem('jwtToken')
      }
      const loggedIn = () => {
        const loggedIn = getToken() != null;
        return loggedIn;
      }

    useEffect(() => {
        getBooks()
        
    },[])
        

  return (
    <div >
        <h1 className="center-text">Books</h1>
        {loggedIn() != false ?

     <> 
     {books.map(book => (
         <div className='section-books'>
             <img className='center' src={'https://covers.openlibrary.org/b/isbn/'+book.isbn+'-M.jpg'} />
            <h2 className='center-text'>{book.title}</h2>
            <h4 className='center-text'>{book.isbn}</h4>
            <p className="center-text">{book.description}</p>
            </div>
     ))}
     </>

     :<>
     <h3 className="center-text">Please Login</h3>
     <NavLink className="navlink" to="/login">Login</NavLink>
     </>
}

    </div>
  );
}
