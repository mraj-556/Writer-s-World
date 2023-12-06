import React from 'react';
import { Link } from 'react-router-dom';
import './Components.css';

function Home() {
  return (
      <div className="App-content">
        <div className='App-content-content'>
          <h1><h3>Hey, welcome to</h3> Writer's World</h1>
          <h2>Share your thoughts here....</h2><br/>
          <Link to="/login">
            <button className="continue_btn">Let's Continue</button>
          </Link>
        </div>
      </div>

  );
}

export default Home;
