import React from 'react'
import { Outlet, Link, NavLink } from "react-router-dom";

function logout() {
    apiFacade.logout();
}

const Header = ({ loggedIn, user }) => {
  return (
    <div>
        <header>
        <nav>
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="cat">Cat Fact</NavLink>
          <NavLink className="nav-link" to="book">Books</NavLink>
          <NavLink className="nav-link" to="addbook">Add Books</NavLink>
          <NavLink className="nav-link" to="bored">Bored?</NavLink>


          {
            loggedIn ?
            <>
                <NavLink className="nav-button" to="/" onClick={logout}>Logout</NavLink>
                <NavLink className="username" to="/" >{user()}</NavLink>
                </>
              : 
              <NavLink className="nav-button" to="login">Login</NavLink>
          }


        </nav>
      </header>
      <Outlet />
    </div>
  )
}

export default Header