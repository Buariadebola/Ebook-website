import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import romance from '../Images/romance bg.jpg'
import horror from '../Images/horror-hd.jpg'
import comedy from '../Images/Comedy-Wallpapers.jpg'
import mystery from '../Images/mystery bg.jpg'
import scifi from '../Images/-science_fiction.jpg'
import fantasy from '../Images/Fantasy-HD.jpg'
import GenreCard from './GenreCard'

const images = [
  {image: romance, genre: 'ROMANCE'},
  {image: horror, genre: 'HORROR'},
  {image: comedy, genre:'COMEDY'},
  {image: mystery, genre:'MYSTERY'},
  {image: scifi, genre:'SCI-FI'},
  {image: fantasy, genre:'FANTASY'}
]

const Genre = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, 3000)

  return () => clearInterval(intervalId);
}, []);

  return (
    <>
      <section className='genre-section'>
          <h1>Find Your Genre</h1>
          <p>Discover Your Next Favourite Story!</p>
          <div className="genre-content">
            {images.map((slide, index) => (
              <GenreCard
                key={index}
                image={slide.image}
                genre={slide.genre}
                isActive={currentIndex === index}
              />
            ))}
          </div>
        <button><Link to="/library">Try Genre Based Filter <FaArrowRight className='genre-arrow' style={{padding: '0 10px'}}/></Link></button>
      </section>
      <hr />
    </>
  )
}

export default Genre
