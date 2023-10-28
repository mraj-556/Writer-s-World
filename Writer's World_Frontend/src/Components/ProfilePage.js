import React from 'react'
import './Components.css'
import profileimg from './Assets/logo.jpg'

function ProfilePage() {
  return (
    <div className='App'>
      <div className='App-header'>
          <div className='name_pic'>
              <img src={profileimg} alt="profile" /> <br/>
              
              <div><span className='glow-text'>Hi !</span> &nbsp;Ashutosh Sahoo<br/></div>
              
              <div className='rating'>
                  <span class="star active_star">&#9733;</span>
                  <span class="star active_star">&#9733;</span>
                  <span class="star active_star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
              </div>
          </div>

          <hr className='hr_line'/>

          <div className='profile_navbar'>
            <div class="profile_navbar_item">Posts</div> |
            <div class="profile_navbar_item">Followers</div> |
            <div class="profile_navbar_item">Following</div>
          </div>

          <div className='profile_details'>
            hi <br/>
          </div>

      </div>
    </div>
  )
}

export default ProfilePage