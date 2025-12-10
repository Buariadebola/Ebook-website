import React, { useState, useEffect } from 'react'
import menuicon from '../Images/menu-icon-24.png'
import img from '../Images/profile icon.png'
import Menubar from '../Components/Menubar'
import ProfileFav from '../Components/ProfileFav'
import ProfilePopup from '../Components/ProfilePopup'
import AddToCart from '../Components/AddToCart'
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { BsInfoCircleFill } from 'react-icons/bs'

const defaultUser = {
  name: "user",
  email: "user@example.com",
  image: img
};

const Profile = ({onClose}) => {


  const [activePage, setActivePage] = useState('profile-fav');
  const [user, setUser] = useState(() => {

      const saved = localStorage.getItem('profileUser');
    return saved ? JSON.parse(saved) : defaultUser;
  });

  useEffect(() => {
    // Save user to localStorage whenever it changes
    localStorage.setItem('profileUser', JSON.stringify(user));
  }, [user]);

  const handleActivePage = (page) => {
    setActivePage(page)
  }

  const handleProfileSave = (updatedUser) => {
    setUser(updatedUser); // Update the user state
  };

  //add sliding effect to the sidebar
  const [slide, setSlide] = useState(false)

  const handleSlide = () => {
    setSlide(!slide)
  }


  return (
    <>
        <div className="profile">
          		<button onClick={handleSlide} className="menu-btn">
                <img className="menu-icon" src={menuicon} alt="" />
              </button>
            <div className={`profile-sidebar ${slide ? 'show' : ''}`} handleactivepage={setActivePage} activepage={activePage}>
              <div className="profile-pic">
                <img src={user.image} alt="" />
              </div>
                <div className='sidebar-info'>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
                <div className="profile-bottom">
                    <button className={activePage === 'profile-fav' ? 'button-active' : ''} onClick={() => handleActivePage('profile-fav')}>Favourite books <FaHeart style={{marginLeft: '10px', scale: '1.3'}}/></button>
                    <button className={activePage === 'add-to-cart' ? 'button-active' : ''} onClick={() => handleActivePage('add-to-cart')}>Cart <FaShoppingCart style={{marginLeft: '10px', scale: '1.3'}}/></button>
                    <button className={activePage === 'profile-popup' ? 'button-active' : ''} onClick={() => handleActivePage('profile-popup')}>Profile info <BsInfoCircleFill style={{marginLeft: '10px', scale: '1.3'}}/></button>
            </div>
            </div>
            <div className="profile-content">
              {activePage === 'profile-fav' && <ProfileFav/>}
              {activePage === 'add-to-cart' && <AddToCart/>}
              {activePage === 'profile-popup' && (
  <ProfilePopup user={user} onSave={handleProfileSave} onClose={onClose} />
)}
            </div>
        </div>
        <Menubar/>
    </>
  )
}

export default Profile
