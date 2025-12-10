import '../App.css'
import NoProfileNav from '../Components/NoProfileNav';
import Hero from '../Components/Hero';
import Footer2 from '../Components/Footer2';
import Features from '../Components/Features'
import Subscribe from '../Components/Subscribe';
import Homenav2 from '../Components/Homenav2';

const WelcomePage = () => {

  return (
    <>
    <Homenav2/>
        <NoProfileNav/>

	    <Hero/>
      {/* features section */}
      <Features/>

      {/* subscribe section */}
      <Subscribe/>

      {/* footer */}
      <Footer2/>
    </>
  )
}

export default WelcomePage
