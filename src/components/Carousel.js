import React from 'react'
import '../css/caro.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import caro1 from '../Images/caro1.jpg'
import caro2 from '../Images/caro2.jpg'
import caro3 from '../Images/caro3.jpg'
import caro4 from '../Images/caro4.jpg'
import bee from '../Images/bee.png'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    
  };

  return (
    <div>
    <h2>Auto Play</h2>
    <Slider {...settings}>
      <div>
        <div className="caro-container">

        <img src={caro1} alt="" />
        <div className="main-para" data-aos="zoom-in">
        <h3>WELCOME TO MENTOONS</h3>
        <p>
A unique platform that combines Mentoring with  <br></br> the powerful language of Cartoons.</p>

        </div>
        </div>
      </div>
      <div>
      <div className="caro-container" data-aos="zoom-in">
          
      <img src={caro2} alt="" />
      <div className="main-para">
        <h3>6-12 WORKSHOPS</h3>
        <p>
        Brace your kids for interactive sessions, enriching journal writing, captivating books, thrilling games,<br></br> entertaining videos - all intended to keep your children engaged<br></br> while teaching them about thoughts, interactions, reactions, making friends, and enhancing self-awareness.</p>

        </div>
          </div>
      </div>
      <div>
      <div className="caro-container" data-aos="zoom-in">
          
      <img src={caro3} alt="" />
      <div className="main-para">
        <h3>WELCOME TO MENTOONS</h3>
        <p>
A unique platform that combines Mentoring with  <br></br>the powerful language of Cartoons.</p>

        </div>
          </div>
      </div>
      <div>
      <div className="caro-container" data-aos="zoom-in">
          
      <img src={caro4} alt="" />
      <div className="main-para">
       
        <h3>WELCOME TO MENTOONS</h3>
        <p>
A unique platform that combines Mentoring with <br></br>the powerful language of Cartoons.</p>

        </div>
          </div>
      </div>
     
    </Slider>
  </div>
  )
}

export default Carousel