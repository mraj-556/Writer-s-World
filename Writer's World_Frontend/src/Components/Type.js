import React from 'react';
import './Components.css';


function Type() {
  return (
    <div className="App">
      <div className="App-header text-area">
        <textarea className="text" cols="90" rows="10" autoFocus placeholder={`Your Thought....`}></textarea>
        <input type="text" placeholder="Writer's Name...." class="name-input"></input>
        <br/>
        <button className='continue_btn'>Share</button>
      </div>
    </div>
  );
}

export default Type;
