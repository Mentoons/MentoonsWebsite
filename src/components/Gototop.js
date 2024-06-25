import React, { useState,useEffect } from 'react'
import '../css/gototop.css'
import { HiArrowNarrowUp } from "react-icons/hi";
const Gototop = () => {

  const [scrollup,setscrollup ] =useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 100){
        setscrollup(true)
      }else{
        setscrollup(false)
      }
    })
  },[])

    const goToBtn = () =>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }
  return (
    <div className="main-butup">

    <div className='up-btn'>
{scrollup && (
  <button onClick={goToBtn}><HiArrowNarrowUp className='up-btn-icon' /></button>
)}
    </div>
    </div>




  
    
  )
}



export default Gototop