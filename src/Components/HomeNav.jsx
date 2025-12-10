import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import menuicon from '../Images/menu-icon-24.png'

const HomeNav = () => {

    const [slide, setSlide] = useState(false)

    const handleSlide = () => {
        setSlide(!slide)
    }

  return (
    <>
        <button className="menu-button" onClick={handleSlide}>
			<img className="menu-icon" src={menuicon} alt="" />
		</button>
        <ul className={`homenav ${slide ? 'show' : ''}`}>
        	<li><Link to="/home">Home</Link></li>
          <hr />
        	<li><Link to="/library">Library</Link></li>
          <hr />
        	<li><Link to="/latest">Latest</Link></li>
          <hr />
        	<li><Link to="/signin">Sign In</Link></li>
        </ul>
    </>
  )
}

export default HomeNav
