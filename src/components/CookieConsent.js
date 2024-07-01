// CookieConsent.js

import React, { useState,useEffect } from "react";
import "../css/Cookies.css";
import Cookie from "../Images/Cookie .png";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Lottie from "lottie-react";
import Thank from "../Lottie/Thank.json"
const CookieConsent = () => {
  
    const [showMessage, setShowMessage] = useState(false);

  const handleAccept = () => {
    setConsentGiven(true);

     setShowMessage(true);
    localStorage.setItem("cookieConsent", "true"); // Store consent in localStorage
  };
   useEffect(() => {
     let timer;
     if (showMessage) {
       timer = setTimeout(() => {
         setShowMessage(false);
       }, 2000); // 1000ms = 1 second
     }
     return () => clearTimeout(timer); // Cleanup function to clear timeout on unmount or state change
   }, [showMessage]);
   const [consentGiven, setConsentGiven] = useState(
     !localStorage.getItem("cookieConsent")
   );

  if (!consentGiven) {
    return (
        
      <div className="cookie-consent">
        <IoIosCloseCircleOutline className="cookie-close"/>
        <div className="cookie-consent-inside">
          <img src={Cookie} alt="" />
          <p>
            This website uses cookies to enhance the user experience. cookies &
            policy
          </p>
          <button onClick={handleAccept}>Accept</button>
        </div>
      </div>
    );
  }

  if (showMessage) {
    return (
      <div className="cookie-consent-thank-msg">
        <Lottie animationData={Thank} className="thank" />
        <IoIosCloseCircleOutline className="cookie-close"/>
        <p>
         Thank You
        </p>
      </div>
    );
  }

  return null; // If consent is given, do not render anything
};

export default CookieConsent;
