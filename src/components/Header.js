import React from 'react';
import header from '../css/header.css';
import Lottie from 'lottie-react';
import Sun from '../animation/Sun.json'
import Teamvideo from '../videos/Teamvideo.mp4'
import Sir from '../Images/Sir.png'
const Header = () => {
  return (
    <div className="blue-container">
      <Lottie animationData={Sun} className='sun-animation'/>
      <div className="cloud-container">
     


          <div className="x2">
          <div className="cloud">
              
              </div>
          </div>
          <div className="x6">
          <div className="cloud">
              
              </div>
          </div>
          <div className='box-dis'>
            <div className="white-bg">
              <div className="txt-box">
              <p>Mentoons is a result of the creative amalgamation of a diverse team coming together - our founder, 
                talented developers, creative illustrators, 
                skillfull graphic designers, adept content writers, melodious music producer and experienced psychologists.</p>
                <video className='teamvideo'width={'600px'} autoPlay={false} controls={true}>
                <source src={Teamvideo} type='video/mp4' />
              </video>
              </div>
              
            </div>
            <div className="sir-image">
                <img src={Sir} alt="" />
              </div>

          </div>
          <div className="x1">
            <div className="cloud">

            </div>
          </div>

          <div className="x3">
          <div className="cloud">
              
              </div>
          </div>


          <div className="x4">
          <div className="cloud">
              
              </div>
          </div>


          <div className="x5">
          <div className="cloud">
              
              </div>
          </div>
      </div>
         
    </div>
  )
}

export default Header