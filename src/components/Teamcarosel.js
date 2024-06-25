import React,{useState} from 'react'
import '../css/teamcaro.css'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
const Teamcarosel = ({ data }) => {
    const [ slide, setslide ] = useState(0);
    const nextSlide = () =>{
        setslide(slide === data.length -1 ? 0 : slide +1 )
    }

    const prevSlide = () =>{
        setslide(slide === 0 ?data.length -1 : slide - 1 )
    }
    
    
  return (
   <>
    <div className="taemcaro">
        <SlArrowLeft  onClick={prevSlide} className='arrow  arrow-left'/>
        {data.map((item,inx)=>{
           
           return  <ul>
                <li><img src={item.src} key={inx}  className={slide === inx ? "slide" : "slide-hidden"} /></li>
            </ul>
             
                
            

            
        })}
        <SlArrowRight onClick={nextSlide} className='arrow right-arrow'/>
        <span className='indicetors'>
            {data.map((_,inx)=>{
                return <button className={slide ===inx ? "indecetor" : "indecetor indecetor-inactive"} key={inx} onClick={()=> setslide(inx)}></button>
            })}
        </span>
    </div>
   </>
  )
}

export default Teamcarosel