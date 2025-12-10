import React from 'react'
import '../App.css'
import Navbar from '../Components/Navbar';
import Hero2 from '../Components/Hero2';
import Footer from '../Components/Footer';
import FavBook from '../Components/FavBook';
import Recent from '../Components/Recent';
import Genre from '../Components/Genre';
import Subscribe from '../Components/Subscribe';
import HomeNav from '../Components/HomeNav';

const Homepage = () => {
  return (
    <div>
        <Navbar/>

        {/* Home Navigation bar*/}
        <HomeNav/>

      {/*Hero section*/}
	    <Hero2/>

      {/* popular books section */}
      <Recent/>

      {/*Genre section*/}
      <Genre/>


      {/* fav book section */}

      {/* subscribe section */}
      <Subscribe/>

      {/* footer */}
      <Footer/>
    </div>
  )
}

export default Homepage
