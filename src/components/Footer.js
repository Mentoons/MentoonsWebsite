import React from 'react'
import '../css/footer.css'
import menlogo from '../Images/menlogo.png'
import { CiFacebook } from "react-icons/ci";
import { LuYoutube } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='hole-container'>
            <div className="down-wave-image">
                {/* <img src={grndownwave} width={'100%'} /> */}
            </div>
            <div className="footer">

                <div className="subscribe">
                    <p>Mentoons is more than a service. <br></br>We are a guiding light to evolving personalities.<br></br> Help us help you transform your life today!</p>
                    <h1>Mentoons Newsletter</h1>
                    <div className="input-group">
                        <input type="email" className="input-footer" id="Email" name="Email" placeholder="Email Address" autocomplete="off" />
                        <input className="button--submit" value="Subscribe" type="submit" />
                    </div>
                </div>
                <div className="footer-logo">
                    <img src={menlogo} width={'150px'} />
                    <div className="round-icons">
                        <ul className="wrapper">
                            <li className="icon facebook">
                                <span className="tooltip">Facebook</span>
                                <span><i className="fab fa-facebook-f"><CiFacebook /></i></span>
                            </li>
                            <li className="icon twitter">
                                <span className="tooltip">Instagram</span>
                                <span><i className="fab fa-twitter"><FaInstagram /></i></span>
                            </li>
                            <li className="icon instagram">
                                <span className="tooltip">YouTube</span>
                                <span><i className="fab fa-instagram"><LuYoutube /></i></span>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="opening-hours">
                    <h1>OPENING HOURS:</h1>
                    <div className="title-heading">
                        <th className='th'>
                            <tr>Weekends / Holidays</tr>
                            <tr>	available on
                                appointment

                            </tr>
                        </th>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Brand Powered by <a href='Propelling Stories'>Propelling Stories</a></p>
            </div>
        </div>
    )
}

export default Footer