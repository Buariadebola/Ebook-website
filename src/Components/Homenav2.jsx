import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import menuicon from '../Images/menu-icon-24.png'

const Homenav2 = () => {

        const [slide, setSlide] = useState(false)
    
        const handleSlide = () => {
            setSlide(!slide)
        }

  return (
    <>
        <button className="menu-button" onClick={handleSlide}>
			<img className="menu-icon" src={menuicon} alt="" />
		</button>
        <ul className={`homenav ${slide ? 'show' : ''}`} style={{zIndex: '2'}}>
        	<li>About</li>
          <hr />
        	<li>Contact</li>
          <hr />
        	<li><Link to="/signin">Sign In</Link></li>
          <hr />
        	<li><Link to="/signup">Sign Up</Link></li>
        </ul>
    </>
  )
}

export default Homenav2
