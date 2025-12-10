import React from 'react'

const GenreCard = ({image, genre, isActive }) => {
  return (
    <div>
        <div className={`genre-box ${isActive ? 'active' : ''}`}>
          <img src={image} alt="" />
          <div className='top'></div>
          <h2>{genre}</h2>
        </div>
    </div>
  )
}

export default GenreCard
