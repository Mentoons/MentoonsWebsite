import React from 'react'
import '../css/gallery.css'
import Lottie from 'lottie-react'
import gallery from '../animation/gallery.json'
import { BsPersonArmsUp } from "react-icons/bs";
const Gallery = () => {
  const data =[
    
    {
      id:1,
      img:'https://mentoons.com/img/gallery1.jpg',
      catrgory:'events',
    },
    {
      id:2,
      img:'https://mentoons.com/img/gallery2.jpg',
      catrgory:'ofclife',
    },
    {
      id:3,
      img:'https://mentoons.com/img/gallery3.jpg',
      catrgory:'ofclife',
    },
    {
      id:4,
      img:'https://mentoons.com/img/gallery4.jpg',
      catrgory:'ofclife',
    },
    {
      id:5,
      img:'https://mentoons.com/img/gallery6.jpg',
      catrgory:'ofclife',
    },
    {
      id:6,
      img:'https://mentoons.com/img/gallery5.jpg',
      catrgory:'events',
    },
  ];
  return (
    <div className='image-gallery'>
      <Lottie animationData={gallery} className='glry-anime' />

      <div className="join-heading-gallry">

<BsPersonArmsUp className='per-icons'/>
<BsPersonArmsUp className='per-iconsa'/>
<h1>OUR GALLERY</h1>
  </div>
      <div>
        <div className='gallery-photos'> 
          {
            data.map((value)=>{
              return(
                <img src={value.img} alt="" />
              )
            })
          }
        </div>
      </div>
      <div>
        
      </div>
  
    </div>
  )
}

export default Gallery