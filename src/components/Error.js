import React from 'react'
import '../css/Error.css'
import Lottie from 'lottie-react'
import Errorani from '../animation/Errorani.json'
const Error = () => {
  return (
    <div>
        <div className="error-main">
        <h1>Sorry This page was not found</h1>
            <Lottie animationData={Errorani} className="error" />
        </div>
       
    </div>
  )
}

export default Error