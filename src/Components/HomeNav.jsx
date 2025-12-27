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
        	<Link to="/home">Home</Link>
        	<Link to="/library">Library</Link>
        	<Link to="/latest">Latest</Link>
        	<Link to="/signin">Sign In</Link>
        </ul>
    </>
  )
}

export default HomeNav
