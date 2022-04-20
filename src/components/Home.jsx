import React from 'react'
import laugh from "../img/laugh.png";
import laugh2 from "../img/laugh2.png";
import ghost from "../img/Ghost-in-the-Shell-Movie-Logo_large.jpg";
import "../styles/Home.css";
const Home = () => {
  return (
    <main>
      <div className='row'>
        <div className='column'>
          <div className='image-container'>
            <img style={{ width: "100%" }} src={laugh2} />
            <div className='centered'>
              <h2>Cats Books And Activities</h2>
            </div>
          </div>
          <div className='home-section'>
            <h2>
              Welcome
            </h2>
            <h3>To do</h3>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home