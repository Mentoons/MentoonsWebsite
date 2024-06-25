import React from 'react'
import '../css/Crochild.css'
const Crochild = () => {
  return (
    <div>
      <div className="revive-container">
        <div className="revive-form">
          <h1>"Let’s Revive"</h1>
          <h2>OUR MEET UP GROUP</h2>
          <p>Revival of Ancient Values, Respect, Care and Relationships.</p>
          <ul>
           <li>In this modern age, it's easy to lose sight of the values that once guided our interactions and relationships.</li> 
           <li>But embracing core values is crucial for fostering a harmonious society and establishing deeper connections with others.</li>
           <li>Engage in real life, Encourage creativity and instigate change!</li>
          </ul>
          <h2>JOIN US</h2>
          <div className="joinmsg-box">
          <input type='text'placeholder='Name' required/>
          <br></br>
          <input type='text'placeholder='Email ID' required/>
          <br></br>
          <input type='text'placeholder='Meetup Group' required/>
          <br></br>
          <input type='text' placeholder='Enter Your Message' />
          </div>
          
          <button className='join-btn'>Together, let's revive and reconnect!</button>
        </div>
      </div>
    </div>
  )
}

export default Crochild