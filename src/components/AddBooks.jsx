import { Link, Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import facade from "../apiFacade";
import "../styles/Books.css";

export default function AddBooks({ loggedIn}) {
    const [books, setBooks] = useState([]);
    const [roles, setRoles] = useState([]);
    const initialValue = {
        title: "",
        isbn: "",
        description: '',
        name: '',
      };
      const [newBook, setNewBook] = useState(initialValue);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newBook);
        facade.createBook(newBook);
        setNewBook(initialValue);
        alert(newBook.title + ' Has been added')
      };
    
      const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewBook({ ...newBook, [name]: value });
      };

    function getRole(setRoles) {
      const [dataFromServer, setDataFromServer] = useState("Loading...")
    
      useEffect(() => {
        facade.fetchUserInfo().then(data => setRoles(data.roles));
      }, [])
    
   return roles
        
      

    }
    console.log();


    function getBooks() {
        facade.fetchBook().then(data => setBooks(data));
    
    } 

    useEffect(() => {
        getBooks()
        
    },[])
        

  return (
    <div >{getRole(setRoles)}
        <h1 className="center-text book-text">Books</h1>
        {loggedIn != false && roles[0] === 'admin' ?
<>
<div className="form-box">
      <form >
        <label>Title: </label>
        <input className="form-input"
          type="text"
          name="title"
          value={newBook.title}
          onChange={handleChange}
        ></input>{" "}
        <br></br>
        <label>ISBN: </label>
        <input className="form-input"
          type="text"
          name="isbn"
          value={newBook.isbn}
          onChange={handleChange}
        ></input>
        <br></br>
        <label>Description: </label>
        <input
        className="form-input"
          type="text"
          name="description"
          value={newBook.description}
          onChange={handleChange}
        ></input>
         <br></br>
        <label>Author: </label>
        <input className="form-input"
          type="text"
          name="name"
          value={newBook.name}
          onChange={handleChange}
        ></input>
        <br></br>
      </form>
      <br></br>
      <button className="button-text" type="submit" onClick={handleSubmit}>
        Add
      </button>
      <br></br>
      <br></br>
    </div>
     <div className='card-list'> 
     {books.map(book => (
         <div className='card-container' key={book.title}>
             <img className='center' src={'https://covers.openlibrary.org/b/isbn/'+book.isbn+'-M.jpg'} />
            <h2 className='center-text'>{book.title}</h2>
            <h4 className='center-text'>{book.isbn}</h4>
            <p className="center-text">{book.description}</p>
            </div>
     ))}
     </div>
     
     </>
     :<>
     {alert('Please login as Admin')}
     <NavLink className="navlink book-text" to="/login">Login</NavLink>
     </>
}

    </div>
  );
}
