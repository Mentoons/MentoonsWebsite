import React, { useState } from "react";
import axios from '../api/Baseurl.js'

import "../pagecss/Productfrom.css";

const Productfrom = ({ addTodo }) => {
  const [CategoryName, setCategoryName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/admin/addCategory',  
         {
          CategoryName: CategoryName
        }
      );

      console.log(response.data, "successfully category added");
      // Additional logic, if needed

    } catch (error) {
      console.error("Error adding category:", error.message);
    }
  };

  return (
    <div>
      <div className="main-add-cate">
        <div className="addcate">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="CategoryName"
              placeholder="Enter category name"
              value={CategoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <button type="submit">Add Category</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Productfrom;
