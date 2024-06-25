import React from 'react'
import join from '../css/join.css'

import Bird from '../animation/Bird.json'
import Lottie from 'lottie-react'
import '../css/Teampage.css'
import { Slides } from '../data/Caroseldata.js'
import Teamcarosel from './Teamcarosel'
import { BsPersonArmsUp } from "react-icons/bs";
const Join = () => {

  
  return (
   <>
    <div className="joincointainer">
      <div className="join-heading">

    <BsPersonArmsUp className='per-icons'/>
    <BsPersonArmsUp className='per-iconsa'/>
  <h1>MENTOONS BENEFITS</h1>
      </div>
  <div className="grass"  data-aos="zoom-in-down"
        data-aos-duration="1000">

  </div>
  <div className="birdiv">

    {/* <Lottie animationData={Bird}  data-aos-duration="1000" data-aos="fade-right" className='bird'/> */}
  </div>
  <div className="about-txt">
    <div>
  <Teamcarosel data={Slides} />
    </div>
    <div className='join-txt'>
      <h3>Our Unique Solution</h3>
      <p>We believe in transforming children's lives by changing maladaptive behavior, <br></br>enhancing self-awareness, and taking a stance against social media addiction.
      <br></br>Our evidence-based methodology combines concepts of social human development and learning through engaging, fun elements like cartoons, games, books, and videos.
      <br></br>Through our in-depth workshops, <br></br>we provide resources that foster social interactions, healthy reactions, and forming lasting friendships. We're here to support children, teenagers, and adults as they navigate life's challenges.</p>
    </div>
  </div>
    <div className="down">
    
    </div>
</div>

    
   </>
  )
}

export default Join