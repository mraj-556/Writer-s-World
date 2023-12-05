import React from 'react';
import { Link } from 'react-router-dom';
import './Components.css';

function Home() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Hey, &nbsp; Welcome...! <br/>To &nbsp; Writer's &nbsp; World</h1>
        <h3>Share your thoughts here....</h3><br/>
        <Link to="/login">
          <button className="continue_btn">Let's Continue....</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
