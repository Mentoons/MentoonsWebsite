import React from 'react'
import '../css/Logbtn.css'
import {Link} from 'react-router-dom'
const Logbtn = () => {
  return (
    <div>
        <ul className='nav-linkss'>
            <Link to="/Signup"><li>Signup</li></Link>
        </ul>
    </div>
  )
}

export default Logbtn