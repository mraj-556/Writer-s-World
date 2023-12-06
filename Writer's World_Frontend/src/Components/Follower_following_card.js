import React from 'react'

import profileimg from './Assets/logo.jpg'


function Follower_following_card() {
  return (
    <div className='follow_card'>
        <div className='pic'>
        <img src={profileimg} alt="profile" /> <br/>
        </div>
        <div className='username'>Ashutosh sahoo <div className='description'>Hello world</div>
        </div>
        <button className='remove_btn'>Remove</button>
    </div>
  )
}

export default Follower_following_card