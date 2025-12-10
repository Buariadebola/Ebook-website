import React from 'react'
import visa from '../Images/visa.jpg'
import mastercard from '../Images/mastercard (1).jpg'
import amex from '../Images/AMEX.jpg'
import paypal from '../Images/paypal.jpg'
import youtube from '../Images/youtube.png'
import insta from '../Images/instagram.png'
import twitter from '../Images/x.png'
import facebook from '../Images/facebook icon.png'
import logo from '../Images/ebook logo.png'

const Footer2 = () => {
  return (
    <>
            	<footer>
		<div className="footer-container" id="footer-container">
			<div className="footer-columns">
				<div class="footer-column footer-logo">
					<img src={logo} alt="" />
				</div>
				<div className="footer-column">
					<h4>About Us:</h4>
					<ul>
						<li>About Ebook Hub</li>
						<li>Our mission</li>
						<li>Our Team</li>
						<li>Contact Us</li>
					</ul>
				</div>
				<div className="footer-column">
					<h4>Customer Services:</h4>
					<ul>
						<li>Help Center</li>
						<li>FAQs</li>
						<li>Returns & Refunds</li>
						<li>Payment Optons</li>
					</ul>
				</div>
				<div className="footer-column">
					<h4>Stay Policies</h4>
					<ul>
						<li>Privacy policy</li>
						<li>Terms & Conditions</li>
						<li>Cookies Policy</li>
						<li>Disclaimer</li>
					</ul>
				</div>
				<div className="footer-column">
					<h4>Payment Methods:</h4>
					<div className='payment-image'>
						<img src={visa} alt="" />
						<img src={mastercard} alt="" />
						<img src={amex} alt="" />
						<img src={paypal} alt="" />
					</div>
				</div>
				<div className="footer-column">
					<h4>Stay connected</h4>
					<div className='social-image'>
						<img src={twitter} alt="" />
						<img src={insta} alt="" />
						<img src={facebook} alt="" />
						<img src={youtube} alt="" />
					</div>
				</div>
				<div className="footer-column">
					<h4>Copyright Information</h4>
					<p>&copy;2025 E-Book Hub. All rights reserved</p>
				</div>
			</div>
		</div>
	</footer>
    </>
  )
}

export default Footer2
