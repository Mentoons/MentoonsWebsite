import React from 'react'
import '../css/namecarousel.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Lottie from 'lottie-react'
import Flight from '../animation/Flight.json'
import { BsPersonArmsUp } from "react-icons/bs";
import Thameem from '../Images/Thameem.jpg'
const Namecarousel = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="main-caro">
            
        <div className="team-board"  data-aos="zoom-in-down"
        data-aos-duration="1000"> 
  </div>
          <div className='w-3/4 m-auto'>
        <div className='mt-20'>
        <Slider {...settings}>
            {data.map((d)=>(
                <div className='bg-white h-[370px] text-black rounded-xl'>
                    <div className=' h-23  rounded-t-xl bg-indigo-500 flex justify-center item-center'>
                        <img src={d.img} className='my-5 h-44 w-44 rounded-full'/>
                 </div>

                 <div className='flex flex-col justify-center items-center gap-4 p-4'>
                    <p className='text-2xl font-semibold'>{d.name}</p>
                    <p>{d.position}</p>
                 </div>
                 </div>
                
            ))}
            </Slider >
        </div>
    </div>
 
    </div>
  
  )
}

const data = [
    {
        name : `Mentor Mahesh`,
    img : `https://mentoons.com/img/team-01.jpg`,
    position : `Founder`
    },
    {
        name : `Anam Fathima`,
    img : `https://mentoons.com/img/team-02.jpg`,
    position : `Content Writer`,
    name1:"dschj",
    name1:"dschj",
    name1:"dschj",
    name1:"dschj",
    },
    {
        name : `Joice Lincy`,
    img : `https://mentoons.com/img/team-03.jpg`,
    position : `Digital Marketing`
    },
    
    {
        name : `Dhinesh  Kumar.G`,
    img : `https://mentoons.com/img/team-08.jpg`,
    position : `Graphic Designer`
    },
    {
        name : `Ajay`,
    img : `https://mentoons.com/img/team-06.jpg`,
    position : `Video Editer`
    },
    {
        name : `Dhanasekar`,
    img : `https://mentoons.com/img/team-07.jpg`,
    position : `Sketch Artist`
    },
    {
        name : `Sankar`,
    img : `https://mentoons.com/img/team-05.jpg`,
    position : `Sketch Artist`
    },
    {
    name : `Aleesha`,
    img : require("../Images/alisha.jpg"),
    position : `Backend Developer`
    },
    {
      name : `Dilsha`,
      img : require("../Images/dilsha.jpg"),
      position : `Backend Developer`
      },
    {
      name : `Thameem Ansari`,
  img :require("../Images/Thameem.jpg"),
  position : `Frontend Developer`
  },
    
    
]


export default Namecarousel