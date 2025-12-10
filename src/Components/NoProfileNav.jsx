import React from 'react'
import { Link } from 'react-router-dom'

const NoProfileNav = () => {
  return (
    <>
            <div>
      <nav className="nav-wrapper" style={{zIndex: '1'}}>
			<div className="left-column">
				<img src="" alt="" />
			</div>
			<div className="right-column2">
				<ul className="nav-link">
                    <li>About</li>
                    <li>Contact</li>
					<li><Link to="/signin"><button id="log-button" className="sign-in">Sign in</button></Link></li>
                    <li><Link to="/signup"><button className="sign-in">Sign up</button></Link></li>
				</ul>
			</div>
		</nav>
    </div>
    </>
  )
}

export default NoProfileNav
