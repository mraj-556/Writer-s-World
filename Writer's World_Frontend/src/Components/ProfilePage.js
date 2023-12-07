import React , {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [userloggedin, setUserloggedin] = useState('User not logged in');
  const [profileimg1, setProfileimg1] = useState(profileimg);
  const [username, setUsername] = useState("Guest");
  const [Description, setDescription] = useState("Default Description");
  const [FollowerCount, setFollowerCount] = useState(0);
  const [FollowingCount, setFollowingCount] = useState(0);
  const [RatingCount, setRatingCount] = useState(0);

  const fetchData = async () => {
    try{
      const response = await axios.get('http://localhost:5000/profile');

      if (response.data['auth']==="Deny"){
        navigate('/login')
        setUserloggedin("false")
      }
      else if (response.data['auth']==="Allow"){
        console.log(response.data["msg"]["Popularity"][0][0])
        setUserloggedin("true")
        setProfileimg1(response.data["msg"]['Profile_Picture'])
        setUsername(response.data["msg"]['User_Name']);
        setDescription(response.data["msg"]['Description']);
        setFollowerCount(response.data["msg"]["Popularity"][0][0]);
        setFollowingCount(response.data["msg"]["Popularity"][0][1]);
        setRatingCount(response.data["msg"]["Popularity"][0][2]);
      }
    } 
    catch (error) {
      setUserloggedin("Server error")
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(()=>{
    fetchData()
  },[userloggedin]);


  if (userloggedin==="true") {
    return (
        <div className='App-content' style={{background:"linear-gradient(-45deg, #003737, #004B59, #002222 )"}}>
          <br/>
          <div className='name_pic'>
            <div className='profile_img_rating'>
              <img src={`data:image/webp;charset=UTF-8;base64,${profileimg1}`} alt="profile" /> <br/>
              <div className='rating'>
              {Array.from({ length: RatingCount }, (_, index) => (
                <span key={index} class="star active_star">&#9733;</span>
              ))}
              {Array.from({ length: (5-RatingCount) }, (_, index) => (
                <span key={index} class="star">&#9733;</span>
              ))}
            </div>
            </div>

            <div className='bio'>
              <div className='username'><span>Hi !</span> &nbsp;{username}</div>
              <div className="description">{Description}</div>
              <button className='btn1'>View more</button>
            </div>
          </div>

          <hr className='hr_line' style={{width:"60%", margin:"auto",marginTop:"2rem"}}/>

          <div className='profile_navbar'>
            <div class="profile_navbar_item" tabindex="0">Followers({FollowerCount})</div>
            <div class="profile_navbar_item" tabindex="0">Following({FollowingCount})</div>
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
  else{
   return(
    <div className='App-content' style={{background:"linear-gradient(-45deg, #003737, #004B59, #002222 )"}}>{userloggedin}</div>
   ) 
  }
}

export default ProfilePage