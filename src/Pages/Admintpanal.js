import React, { useState } from 'react'
import '../pagecss/Admintpanal.css'
import {Button, Menu} from 'antd'
import Admintsidebar from '../Pages/Admintsidebar.js'
import { IoHome } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { BiSolidFolderPlus } from "react-icons/bi";
import Productfrom from '../Pages/Productfrom.js'
import Todo from './Todo.js';
import { v4 as uuidv4} from 'uuid'
import { useNavigate } from 'react-router-dom';
import Productitems from '../Pages/Productitems.js'

const Admintpanal = () => {


  const  [items,setItems] =useState(
    [
      {
        id:1,
        checked:true,
        item:"comic"
      },
      {
        id:2,
        checked:true,
        item:"comic"
      },
      {
        id:3,
        checked:true,
        item:"comic"
      },
    ]
  )
   
  const [page,setPage] = useState(0);
  const [todos,setTodos] = useState([]);
  
      
  return (
  <>
    <div className='addmin-sidebar'>
   <Menu
  
   className='sidebar-nav'
    items={[
      {label:"Dashboard" , icon : <IoHome  className='ap-icons' onClick={()=>setPage("daseborad")}/>},
      {label:"AddCategory",icon :<BiSolidFolderPlus onClick={()=>setPage("addCategory")} />},
      {label:"AddProduct" , icon:<GoPlus onClick={()=>setPage("addProduct")} />},
    ]}
   >
   
   </Menu>
<div className="summa">

  {page === 'daseborad' && <div>
    <h1>thameem</h1>

    <div >
      
 
     
    </div>
   </div> }

 

   {page === 'addCategory' && <div className='addcate-main'>

   <Productfrom />
    <div >
      <h1>ansaei</h1>
      
 
     
    </div>
  </div> }
   
  {page === 'addProduct' &&  <div>
  <Productitems />
  </div>}
  
</div>
 
    </div>
   
   
   
  </>
  )
}

export default Admintpanal