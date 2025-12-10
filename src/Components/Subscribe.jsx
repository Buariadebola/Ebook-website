import React from 'react'
import sendicon from '../Images/send.png'

const Subscribe = () => {
  return (
    <>
    <section className='subscribe-section'>
        <h1>Subscribe To Our Newsletter</h1>
        <p>Be the first to know about new releases, subscribe now to join our community!</p>
        <div className="subscribe-content">
          <form action="" className="subscribe-form">
            <input type="text" placeholder='Input email address'/>
            <button>Subscribe <img src={sendicon} alt="" /></button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Subscribe
