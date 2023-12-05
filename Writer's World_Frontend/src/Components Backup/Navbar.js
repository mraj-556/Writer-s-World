import React from 'react'
import './Components.css'
import profileimg from './Assets/logo.jpg'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar_left'>
        <div className='logo'>
          <div className='brand_item'><img src={profileimg} alt="" /></div>
          <span className='brand_item'> Writers World</span>
        </div>
        <div className='navbar_left_content'>
          <div className='navbar_left_content_item'>Home</div>
          <div className='navbar_left_content_item'>Trending</div>
          <div className='navbar_left_content_item'>About</div>
          <div className='navbar_left_content_item'>Contact Us</div>
          <div className='navbar_left_content_item'>Feedback</div>
        </div>
      </div>

      <div className='navbar_right'>
        <img src={profileimg} alt="Profile" />
      </div>

    </div>
  )
}

export default Navbar