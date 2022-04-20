import { Link, Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import facade from "../apiFacade";
import "../styles/Books.css";

export default function Books() {
    const [books, setBooks] = useState([]);
    const [image, setImage] = useState('');


    function getBooks() {
        facade.fetchBook().then(data => setBooks(data));
    }    

    useEffect(() => {
        getBooks()
        
    },[])

  console.log(image);
    
    console.log(books);
        

  return (
    <div >
        <h1 className="center">Books</h1>
     {books.map(book => (
         <div className='section'>
             <img className='center' src={'https://covers.openlibrary.org/b/isbn/'+book.isbn+'-M.jpg'} />
            <h3 className='center'>{book.title}</h3>
            <h3 className='center'>{book.isbn}</h3>
            </div>
  
     ))}
    </div>
  );
}
