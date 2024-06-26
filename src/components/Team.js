import React from 'react'
import '../css/team.css'
import Lottie from 'lottie-react'
import { BsPersonArmsUp } from "react-icons/bs";
import Teamvideo from '../videos/Teamvideo.mp4'


const Team = () => {
 
  return (
   <div className="team">   
    <div className="join-heading">

<BsPersonArmsUp className='per-icons'/>
<BsPersonArmsUp className='per-iconsa'/>
<h1>INSIDE MENTOONS</h1>
  </div> 
  <div className="videobox">

    <video className='teamvideo-team' width={'600px'} autoPlay={false} controls={true}>
      <source src={Teamvideo} type='video/mp4' />
    </video>

    <div className="teamtxt-a">
      {/* <h1>
      Meet Us
      </h1> */}
      <h2>Meet Us</h2>
      <p>
      Mentoons is a result of the creative amalgamation of a diverse team coming<br></br> together - our founder, talented developers, creative illustrators, skillfull graphic designers,<br></br> adept content writers, melodious music producer, and experienced psychologists.
      </p>
    </div>
    </div>
 
          <section className="teambord-bg">

          </section>
   </div>
  )
}

export default Team