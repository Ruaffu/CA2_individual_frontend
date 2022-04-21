import React from 'react'
import laugh from "../img/laugh.png";
import laugh2 from "../img/laugh2.png";
import laugh3 from "../img/laugh3.png";
import ghost from "../img/Ghost-in-the-Shell-Movie-Logo_large.jpg";
import "../styles/Home.css";
const Home = () => {
  return (
    <main>
      <div >
        <div >
          <div className='image-container'>
            <img style={{ width: "100%" }} src={laugh3} />
            <div className='centered'>
              <h2>Cats Books And Activities</h2>
            </div>
          </div>
          <div >
            <h2 className='home-text'>
              Welcome
            </h2>
            <h3 className='home-text-small'>To do</h3>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home