import { Link } from 'react-router-dom'
import heroimage1 from '../Images/WH.jpg'
import heroimage2 from '../Images/TLOTR.jpeg'
import heroimage3 from '../Images/1984.jpeg'

const Hero = () => {
  return (
    <>
      <div>
      <section className="hero" id="hero">
			<div className="hero-content">
				<h1>EXPLORE A WORLD OF E-BOOKS</h1>
				<p>Your next favorite book is just a click away. Sign in to get started, purchase your book now!</p>
				<Link to="/signin"><button> sign in </button></Link>
			</div>
			<div className="hero-image">
				<div id="autoshow" className="hero-container1"><img src={heroimage1} alt=''/></div>
				<div id="autoshow" className="hero-container2"><img src={heroimage2} alt=''/></div>
				<div id="autoshow" className="hero-container3"><img src={heroimage3} alt=''/></div>
			</div>
		</section>
    </div>
    </>
  )
}

export default Hero