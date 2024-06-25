import React from 'react'
import '../css/contact.css'
import { IoMailOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { BsPersonArmsUp } from "react-icons/bs";


const Contact = () => {
  return (
    <>
     
<div className='contact-main'>
<div className="join-heading">

<BsPersonArmsUp className='per-icons'/>
<BsPersonArmsUp className='per-iconsa'/>
<h1>CONTACT US</h1>
  </div>
   <div className="contact-main-conatiner">
   <div className="information">
    <h1 >INFORMATION</h1>
    <p>
    <a href='mailto:mentermahesh@gmail.com'><IoMailOutline />mentarmahesh@gmail.com</a> 
    </p>
    <p>
    <FaPhoneAlt />      Call us 7892858593
    </p>
    <p>
    We are located at Domlur, Bangalore.
    </p>
    <div className="map">
    <iframe id='contact' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2836653176196!2d77.63712627484104!3d12.953691687360022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae155a60ecb7a1%3A0xac5bd734b84eb2b8!2sMentoons!5e0!3m2!1sen!2sin!4v1702880574719!5m2!1sen!2sin"  
     loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
   </div>

      <div className="contact-box">
        <h1>Write Us</h1>
      <input type='text'placeholder='Name' required/>
      <br></br>
      <input type='text'placeholder='Email ID' required/>
      <br></br>
      <input type='text'placeholder='Meetup Group' required/>
      <br></br>
      <input type='text' placeholder='Enter Your Message' />
      </div>    
          
   </div>
   <button className='contact-btn'>Send message</button>
    </div>
    </>
   
  )
}

export default Contact