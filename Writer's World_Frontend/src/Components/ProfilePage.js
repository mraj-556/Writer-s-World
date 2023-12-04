import React from 'react'
import './Components.css'
import ShayariCard from './ShayariCard'
import profileimg from './Assets/logo.jpg'

function ProfilePage() {
  const text1 = 
            `मेरी ख्वाहिश है
            ऐसे मुझे यूं चाहो,
            जैसे दर्द में कोई
            सुकून चाहता है।`;

  const text2 = `कोई दिल की ख़ुशी के लिए,
  तो कोई दिल्लगी के लिए,
  हर कोई प्यार ढूंढता है यहाँ,
  अपनी तनहा सी जिंदगी के लिए।`  

  return (
      <div className='App-header'>
        <br/>
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
          <div class="profile_navbar_item">Followers(1.5k)</div>
          <div class="profile_navbar_item">Following(100)</div>
          <div class="profile_navbar_item">Shayaries(2)</div>
          <div class="profile_navbar_item">Stories(5)</div>
        </div>
        
        <br/>
        <div className='profile_details'>
          <ShayariCard text={text1}/>
          <ShayariCard text={text2}/>
          <ShayariCard text={"Its shayari3"}/>
          <ShayariCard text={"Its shayari4"}/>
          <ShayariCard text={"Its shayari5"}/>
          <ShayariCard text={"Its shayari6"}/>
          <ShayariCard text={"Its shayari7"}/>
        </div>
      </div>
  )
}

export default ProfilePage