import React from 'react'
import '../css/signinicon.css'
import { PiSignInDuotone } from "react-icons/pi";
import {Link} from 'react-router-dom'
import Signin from '../Pages/Signin';
const Teampage = () => {
  
  return (
    <div className="team-page-icon">
      <Link to='/Signin' element={<Signin />}><PiSignInDuotone className='signin-icon' /></Link>
    </div>
  )
}

export default Teampage