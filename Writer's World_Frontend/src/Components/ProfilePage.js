import React from 'react'
import './Components.css'
import ShayariCard from './ShayariCard'
import Follower_following_card from './Follower_following_card'
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
      <div className='App-content' style={{background:"linear-gradient(-45deg, #003737, #004B59, #002222 )"}}>
        <br/>
        <div className='name_pic'>
          <div className='profile_img_rating'>
            <img src={profileimg} alt="profile" /> <br/>
            <div className='rating'>
                <span class="star active_star">&#9733;</span>
                <span class="star active_star">&#9733;</span>
                <span class="star active_star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
          </div>
          </div>

          <div className='bio'>
            <div className='username'><span>Hi !</span> &nbsp;Ashutosh Sahoo</div>
            <div className="description">Hello world</div>
            <button className='btn1'>View more</button>
          </div>
        </div>

        <hr className='hr_line' style={{width:"60%", margin:"auto",marginTop:"2rem"}}/>

        <div className='profile_navbar'>
          <div class="profile_navbar_item" tabindex="0">Followers(1.5k)</div>
          <div class="profile_navbar_item" tabindex="0">Following(100)</div>
          <div class="profile_navbar_item" tabindex="0">Shayaries(2)</div>
          <div class="profile_navbar_item" tabindex="0">Stories(5)</div>
          <div class="profile_navbar_item" tabindex="0">Poems(7)</div>
        </div>
        
        <br/>
        <div className='profile_details'>
          {/* <ShayariCard text={text1}/>
          <ShayariCard text={text2}/>
          <ShayariCard text={"Its shayari3"}/>
          <ShayariCard text={"Its shayari4"}/>
          <ShayariCard text={"Its shayari5"}/>
          <ShayariCard text={"Its shayari6"}/>
          <ShayariCard text={"Its shayari7"}/> */}
          <Follower_following_card/>
        </div>
      </div>
  )
}

export default ProfilePage