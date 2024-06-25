import React from "react";
import "../pagecss/Adsidebar.css";
import { FaHome } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom'
const Admintsidebar = () => {
  return (
    <div>
      <div className="sidebar-admin">
        <h1>Dashboard</h1>
        <ul>
           <li><FaHome className="home-icon" /> Home</li>
            <NavLink to='Additems'><li><IoAddSharp className="add-product-icon"/> Add Product</li></NavLink>
            <li> <IoAddCircleOutline className="add-Cate-icon" /> Add Category</li>
        </ul>
      </div>
    </div>
  );
};

export default Admintsidebar;
