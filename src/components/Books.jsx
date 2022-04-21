import { Link, Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import facade from "../apiFacade";
import "../styles/Books.css";

export default function Books({ loggedIn}) {
    const [books, setBooks] = useState([]);

    function getBooks() {
        facade.fetchBook().then(data => setBooks(data));
        
    
    } 
    console.log(books);

    useEffect(() => {
        getBooks()
        
    },[])
        

  return (
    <div >
        <h1 className="center-text book-text">Books</h1>
        {loggedIn != false?

     <div className='card-list'> 
     {books.map(book => (
         <div className='card-container' key={book.title}>
             <img className='center' src={'https://covers.openlibrary.org/b/isbn/'+book.isbn+'-M.jpg'} />
            <h2 className='center-text'>{book.title}</h2>
            <h2 className='center-text'>By {book.authors[0]}</h2>
            <h4 className='center-text'>{book.isbn}</h4>
            <p className="center-text">{book.description}</p>
            </div>
     ))}
     </div>

     :<>
     <h3 className="center-text book-text">Please Login</h3>
     <NavLink className="navlink book-text" to="/login">Login</NavLink>
     </>
}

    </div>
  );
}
