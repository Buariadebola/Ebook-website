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
        	<Link to="/signin">Sign In</Link>
        	<Link to="/signup">Sign Up</Link>
        </ul>
    </>
  )
}

export default Homenav2
