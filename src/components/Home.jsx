import React from 'react'
import laugh from "../img/laugh.png";
import laugh2 from "../img/laugh2.png";
import laugh3 from "../img/laugh3.png";
import ghost from "../img/Ghost-in-the-Shell-Movie-Logo_large.jpg";
import "../styles/Home.css";
import Footer from './Footer';
const Home = () => {
  return (
    <main>
      <div >
        <div >
          <div className='image-container'>
            <img style={{ width: "100%" }} src={laugh3} />
            <div className='centered'>
              <h2>Cats Books And Activities </h2>
            </div>
          </div>
          <div >
            <h2 className='home-text'>
              Welcome to CA2
            </h2>
            <p className='home-text-small'>Changes to the start code: 
</p>
            <p className='home-text-small'>
            •	Added Book, AddBooks and Bored components.<br/><br/>
•	Book displays a all the books currently in the database along with an image of the front cover.<br/><br/>
•	AddBooks contains the same as Book and a form for adding more books to the database.<br/><br/>
•	Bored clicking the generate button an activity is fetched and displayed on the page. <br/><br/>
Security has been added to both book and add books, meaning you need to be logged in to view books and to add books you need to be logged in as admin. 

 
</p>
          <Footer/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home