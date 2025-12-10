import React from 'react'
import home from '../Images/homeicon.png'
import library from '../Images/search2.png'
import { Link } from 'react-router-dom'
import { FaNewspaper } from 'react-icons/fa'

const Menubar = () => {
  return (
    <div className='menubar'>
      <Link to="/home"><img src={home} alt="" /></Link>
      <Link to="/library"><img src={library} alt="" /></Link>
      <Link to="/latest"><FaNewspaper style={{scale: '1.7', color: 'white'}}/></Link>
    </div>
  )
}

export default Menubar
