import React from 'react';
import { Link } from 'react-router-dom';
import './Components.css';

function Home() {
  return (
    <div className="App">
      <div className="App-content">
        <div className='App-content-content'>
          <h1><h3>Hey, welcome to</h3> Writer's &nbsp; World</h1>
          <h6>Share your thoughts here....</h6><br/>
          <Link to="/login">
            <button className="continue_btn">Let's Continue....</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
