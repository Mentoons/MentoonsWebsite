import React from 'react'
import '../css/Workshopmain.css'
import { BsPersonArmsUp } from "react-icons/bs";
import menlogo from '../Images/menlogo.png'
import youtube from '../Images/youtube.jpg'
import Slider from "react-slick";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const WorkShopmain = () => {

        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3
        };

  return (

    <>
    

    <div>
      <div className="workshop-nav">
      <img src={menlogo}  className='logo-for-workshop'/>
      <div className="mainwrkshop">
        
  </div>

  <div className="container-work">

<div className="search-container">
  <input className="input" type="text" 
  placeholder='Shops For 6-10' />
  
  <svg viewBox="0 0 24 24" class="search__icon">
    <g>
      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
      </path>
    </g>
  </svg>
</div>
</div>
      
      </div>
                <p  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     
     data-aos-duration="2000"
     className='own-p'>How to make your own comics.....</p>

     <div className="Work-Hdr-text">
        <div className="wrk-hdr">
                <h1  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     
     data-aos-duration="2000">LETS' CONNECT THROUGH COMICS</h1>
                    <h2  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     
     data-aos-duration="2500">LIKE THE WAY WE USED TO.........</h2>
        </div>
        <img src={youtube} width={650}alt="" />
     </div>
     <div className="faq">
        <p  data-aos="zoom-out-down" data-aos-duration="1000">FOR WHOM ARE THE WORKSHOP</p>
     </div>


    </div>

   
    
    <div className="work-shop-boxes">
    <p className='mood'>REDUCE NEGATIVE MOOD !</p>
     <Slider {...settings}>
          <div className='first-box' data-aos-duration="2000" data-aos="flip-left">
           <p>coloring pages for adults</p>
          </div>
          <div className='first-box'data-aos-duration="1500" data-aos="flip-left">
           <p>coloring pages for adults</p>
          </div>
          <div className='first-box' data-aos-duration="1   000" data-aos="flip-left">
           <p>coloring pages for adults</p>
          </div>
          <div className='second-box'>
           <p>coloring pages for adults</p>
          </div>
          <div className='second-box'>
           <p>coloring pages for adults</p>
          </div>
          <div className='second-box'>
           <p>coloring pages for adults</p>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>

     </div>
    </>

  )
}

export default WorkShopmain