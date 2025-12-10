import React, { useState, useEffect} from 'react'
import ebook from '../Images/ebook.png'
import searchbook from '../Images/analysis.png'
import library from '../Images/filter.png'
import bookmark from '../Images/bookmark.png'


const Features = () => {

        const [fadeSlide, setFadeSlide] = useState(false);
  
    const handleSlide = () => {
      const slideTop = document.querySelector('.feature').getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (slideTop < windowHeight * 0.8) {
        setFadeSlide(true);
    } else {
      setFadeSlide(false);
    }
    }
  
      useEffect(() => {
        window.addEventListener('scroll', handleSlide);
        return () => window.removeEventListener('scroll', handleSlide)
      }, []);


  return (
    <>
      <section className='features-section'>
        <h1>Our Features</h1>
        <div className='features-content'>
          <div className={`feature ${fadeSlide ? 'active' : ''}`}>
            <h2>Latest Ebooks <img src={ebook} alt="" /></h2>
            <p>Stay up-to-date with the latest ebooks! Our "Latest" page showcases newly released titles, ensuring you never miss out on the newest stories and knowledge.</p>
          </div>
          <div className={`feature ${fadeSlide ? 'active' : ''}`}>
            <h2>Powerful Search <img src={searchbook} alt="" /></h2>
            <p>Find your favourite book with ease! Our search feature allows you to discover ebooks by title, author, or genre, making it simple to navigate our vast library. </p>
          </div>
          <div className={`feature ${fadeSlide ? 'active' : ''}`}>
            <h2>Personalized Library <img src={library} alt="" /></h2>
            <p>Organize your reading journey! Our library page lets you filter books by genre, helping you discover new titles that match you interest.</p>
          </div>
          <div className={`feature ${fadeSlide ? 'active' : ''}`}>
            <h2>Bookmark & Track Progress<img src={bookmark} alt="" /></h2>
            <p>Never lose your place! Bookmark your favourite ebooks and track your progress, ensuring a seamless reading experience across devices.</p>
          </div>
          </div>
      </section>
    </>
  )
}

export default Features
